import groovy.json.JsonOutput

def APP_NAME = 'innovation-toolkit'
def CADDY_BUILD_CONFIG = 'innovation-toolkit-caddy'
def CADDY_IMAGESTREAM_NAME = CADDY_BUILD_CONFIG
def TAG_NAMES = ['dev', 'prod']

node('master') {
  stage('Checkout') {
    echo "Checking out source"
    checkout scm
  }

  stage('Build Image') {
    echo "Build: ${BUILD_ID}"
    // run the oc build to package the artifacts into a docker image
    openshiftBuild bldCfg: APP_NAME, showBuildLogs: 'true', verbose: 'true'

    openshiftBuild bldCfg: CADDY_BUILD_CONFIG, showBuildLogs: 'true', verbose: 'true'

    // Don't tag with BUILD_ID so the pruner can do it's job; it won't delete tagged images.
    // Tag the images for deployment based on the image's hash
    IMAGE_HASH = sh (
      script: """oc get istag ${CADDY_IMAGESTREAM_NAME}:latest -o template --template=\"{{.image.dockerImageReference}}\"|awk -F \":\" \'{print \$3}\'""",
      returnStdout: true).trim()
    echo ">> IMAGE_HASH: ${IMAGE_HASH}"

    openshiftTag destStream: CADDY_IMAGESTREAM_NAME, verbose: 'true', destTag: TAG_NAMES[0], srcStream: CADDY_IMAGESTREAM_NAME, srcTag: "${IMAGE_HASH}"
  }

  stage('Approval') {
    timeout(time: 1, unit: 'DAYS') {
      input message: "Deploy to production?", submitter: 'authenticated'
    }
    node ('master') {
      stage('Promotion') {
        openshiftTag destStream: CADDY_IMAGESTREAM_NAME, verbose: 'true', destTag: TAG_NAMES[1], srcStream: CADDY_IMAGESTREAM_NAME, srcTag: "${IMAGE_HASH}"
      }
    }
  }
}
