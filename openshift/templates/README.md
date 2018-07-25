## Deployment Flow:

Update in the `os-pages` branch will trigger Jenkins pipeline:
1. Checkout the source from Github
2. Build images:
    
    2.1 Build the Jekyll image: Jekyll will build the project and generate static content in /_site
    
    2.2 Build the Caddy image: Caddy will host the project at port 2015
    
    2.3 Deploy to Development environment
    
4. Wait for approval to deploy to Production environment
5. Deploy to production
