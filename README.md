# BCGov Innovators Toolkit

The BCGov Innovators Toolkit is the reference repository for digital best practices across our teams. Most of our guides are open source, and you are free to use them as you wish.

Our hope is that other digital service teams, both inside and outside of the BC government, will adopt or modify the practices outlined here.

By developing this material in the open, we hope to encourage expert review and contributions from members of the tech community, furthering our goal of improving how government works through increased civic engagement with tech specialists.

This site was developed using [approved BC Government standards](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/web-content-development-guides/developers-guide/template) in respect to branding, functionality, and information architecture.

<!-- TOC -->

- [Contribution Instructions](#contribution-instructions)
  - [Adding an entire new guide](#adding-an-entire-new-guide)
- [Developer Installation](#developer-installation)
  - [Running Webpack](#running-webpack)
  - [Pull requests for website changes](#pull-requests-for-website-changes)
  - [Static assets and binary files](#static-assets-and-binary-files)
  - [Modifications made to the default BC Gov theme](#modifications-made-to-the-default-bc-gov-theme)
  - [When you are ready to publish the site](#when-you-are-ready-to-publish-the-site)

<!-- /TOC -->

## Contribution Instructions

[See the wiki](https://github.com/bcgov/innovation-toolkit/wiki) for a full set of instructions on how to contribute to the guides hosted here.

### Adding an entire new guide

Reach out to a contact mentioned within the toolkit to begin the process of adding another digital guide.

## Developer Installation

In order to install this website and the collection of digital guides onto your local computer, follow the instructions below. Please note that while contributions to the guides and front-end code of the website are welcome, the Government of British Columbia does not authorize the public publication of this website on any top level domains external to `gov.bc.ca` or internal domains other than `.bcgov`

1. Ensure you have [Node](https://nodejs.org/en/), NPM, [Ruby](https://www.ruby-lang.org/en/documentation/installation/), [Bundler](http://bundler.io) and [Jekyll](https://jekyllrb.com/docs/installation/) installed.
1. Clone this repository: `git clone https://github.com/bcgov/innovation-toolkit.git`
1. Change directory into the project root: `cd innovation-toolkit`
1. Install dev dependancies: `npm install && npm run build`
1. Serve the site locally: `bundle exec jekyll serve --watch`

### Running Webpack

`npm run build` will run [Webpack](https://webpack.js.org) into order to compile SCSS and JS.

`npm run watch` will watch SCSS and JS files in the `src` directory and re-compile CSS and JS when the files are saved.

Run `bundle exec jekyll serve --watch` in order to serve the site locally.

### Pull requests for website changes

Pull requests to the source code of the website are welcomed and appriciated. In order to contribute to the content of the site [see the wiki](https://github.com/bcgov/innovation-toolkit/wiki).

### Static assets and binary files

Static images and CSS, JS, etc. are served from the `/static` folder off of the root of the project. Move any static files to this directory and when Jekyll builds the site the files will end up at: `<example-site.com>/static/...` For example, if you place `foo.jpg` inside `/static/img`, the file will be served from `example-site.com/static/img/foo.jpg`

### Modifications made to the default BC Gov theme

Some changes made to the [BC Gov Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton) (of which this site is based off):

1. Line 302 of `src/js/bc-gov/misc.js` is commented out - This line intentionally offset the scroll position when scrolling to an anchor on the page. This was done because the default theme has a "sticky" header/navigation while this site does not.

### When you are ready to publish the site

**Important!** Set the `JEKYLL_ENV` variable to `production` via the command line by adding it to your build command, like this: `JEKYLL_ENV=production bundle exec jekyll serve` or `JEKYLL_ENV=production jekyll build`

Setting the `JEKYLL_ENV` to `production` will compile the site with certain features enabled, such as analytics.
