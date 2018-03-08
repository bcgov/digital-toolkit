# BCGov Digital Toolkit

The BCGov Digital Toolkit is the reference repository for digital best practices across our teams. Most of our guides are open source, and you are free to use them as you wish.

Our hope is that other digital service teams, both inside and outside of the BC government, will adopt or modify the practices outlined here.

By developing this material in the open, we hope to encourage expert review and contributions from members of the tech community, furthering our goal of improving how government works through increased civic engagement with tech specialists.

This site was developed using [approved BC Government standards](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/developers-guide/template) in respect to branding, functionality, and information architecture.

<!-- TOC -->

* [Contribute to this Project](#contribute-to-this-project)
* [Developer Installation](#developer-installation)
  * [Watching files for changes](#watching-files-for-changes)
  * [Pull requests for website changes](#pull-requests-for-website-changes)
  * [Static assets and binary files](#static-assets-and-binary-files)
  * [Modifications made to the default BC Gov theme](#modifications-made-to-the-default-bc-gov-theme)
  * [When you are ready to publish the site](#when-you-are-ready-to-publish-the-site)
* [Approving changes made on GitHub](#approving-changes-made-on-github)

<!-- /TOC -->

## Contribute to this Project

[See the wiki](https://github.com/bcgov/digital-toolkit/wiki) for a full set of instructions on how to contribute to the guides hosted here.

## Developer Installation

In order to install this website and the collection of digital guides onto your local computer, follow the instructions below. Please note that while contributions to the guides and front-end code of the website are welcome, the Government of British Columbia does not authorize the public publication of this website on any top level domains external to `gov.bc.ca` or internal domains other than `.bcgov`

You may install and run this website locally and you may use its source code as the foundation for a project of your own. However, copying and redistributing the source code without modifications is prohibited.

1.  Ensure you have [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Bundler](http://bundler.io) and [Jekyll](https://jekyllrb.com/docs/installation/) installed.
1.  Clone this repository: `git clone https://github.com/bcgov/digital-toolkit.git`
1.  Change directory into the project root: `cd digital-toolkit`
1.  Serve the site locally: `bundle exec jekyll serve --watch`

### Watching files for changes

Run `bundle exec jekyll serve --watch` in order to serve the site locally and to watch the source files for changes. Re-saving a file will cause the site to be re-generated when using the `--watch` option.

### Pull requests for website changes

Pull requests to the source code of the website are welcomed and appriciated. In order to contribute to the content of the site [see the wiki](https://github.com/bcgov/digital-toolkit/wiki).

### Static assets and binary files

Static images and CSS, JS, etc. are served from the `/static` folder off of the root of the project. Move any static files to this directory and when Jekyll builds the site, the files will end up at: `<example-site.com>/static/<file-name.file>` For example, if you place `foo.jpg` inside `/static/img`, the file will be served from `example-site.com/static/img/foo.jpg`

### Modifications made to the default BC Gov theme

Some changes made to the [BC Gov Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton) (of which this site is based off) are:

1.  Line 302 of `src/js/bc-gov/misc.js` is commented out - This line intentionally offset the scroll position when scrolling to an anchor on the page. This was done because the default theme has a "sticky" header/navigation while this site does not.

### When you are ready to publish the site

**Important!** Set the `JEKYLL_ENV` variable to `production` via the command line by adding it to your build command, like this: `JEKYLL_ENV=production bundle exec jekyll serve` or `JEKYLL_ENV=production jekyll build`

Setting the `JEKYLL_ENV` to `production` will compile the site with certain features enabled, such as analytics.

For a full list of dependancies, or to use with Docker, see the `Dockerfile`

## Approving changes made on GitHub

We pull the publishing source code from [the `os-pages` branch](https://github.com/bcgov/digital-toolkit/tree/os-pages). (Do not delete this branch, the build will break).

The public and employees of the BCPS will make changes to the `master` branch. When these changes have been reviewed and approved, simply merge them to the `os-pages` branch with git or GitHub (instructions for GitHub follow). This will trigger a webhook that will publish the changes live to <https://digital-toolkit.pathfinder.gov.bc.ca/>.

In order to merge changes directly on GitHub:

1.  Visit: <https://github.com/bcgov/digital-toolkit/tree/os-pages>
1.  Click "Pull Request" or visit: <https://github.com/bcgov/digital-toolkit/compare/os-pages...master>
1.  Create a pull request, giving details outlining the changes. Here is a great place to disscuss changes with other members of the team. You should see "Able to merge. These branches can be automatically merged." at the top of the page. If not, review the changes well. A conflicting change generally means a big change.
1.  Optionally, assign reviewers and assignees, and lables.
1.  Click "Create pull request"
1.  You now have your pull request! You may disscuss it furthur with your team via the comments box, or, you can click the shiny "Merge pull request" button in order to make your changes live on the `os-pages` branch (aka <https://digital-toolkit.pathfinder.gov.bc.ca/>)
