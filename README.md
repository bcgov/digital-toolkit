# BCGov Innovators Toolkit

The BCGov Innovators Toolkit is the reference repository for digital best practices across our teams. Most of our guides are open source, and you are free to use them as you wish.

Our hope is that other digital service teams, both inside and outside of the BC government, will adopt or modify the practices outlined here.

By developing this material in the open, we hope to encourage expert review and contributions from members of the tech community, furthering our goal of improving how government works through increased civic engagement with tech specialists.

<!-- TOC -->

- [Contribution Instructions](#contribution-instructions)
  - [Editing Markdown](#editing-markdown)
  - [Contributing to the guides](#contributing-to-the-guides)
  - [Contributing to the steps](#contributing-to-the-steps)
- [Developer Installation](#developer-installation)

<!-- /TOC -->

## Contribution Instructions

Making suggestions and edits is as easy as forking this repository and submitting a pull request - just edit the relevant [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files.

### Editing Markdown

In order to contribute to this project, basic knowledge of the [Markdown syntax](https://daringfireball.net/projects/markdown/syntax) is required. Markdown is really easy to learn - basically you just edit the text inside the Mardown (`.md`, `.markdown`) files in order to change the content inside the guides.

### Contributing to the guides

Comming soon.

### Contributing to the steps

The digital innovation steps are organized sequentially. The files are numbered 1-10 like this: `01-title-of-step.md`. The numbering is important, because this is how we determine their order.

1. [Visit the `_steps` folder](https://github.com/bcgov/innovation-toolkit/tree/master/_steps).
1. Click the step that you would like to edit, then select the pencil icon (top-right)
1. The repository will be automatically forked to your repository and you will be able to edit the file.
1. When you are finished making all of your edits to the file, click the green "commit" button at the bottom of the page. Be sure to add a descriptive "commit message" detailing what was changed.
1. Now, on your forked repository's homepage, click "Pull Request".
1. Follow the instructions giving reasons for your changes, then click submit in order to submit your request.

### Contributing to the examples

Comming soon.

## Developer Installation

In order to install this website and the collection of digital use guides onto your local computer, follow the instructions below. Please note that while contributions to the guides and front-end code of the website are welcome, the Government of British Columbia does not authorize the public publication of this website on any top level domains external to `gov.bc.ca`

1. Ensure you have [Node](https://nodejs.org/en/), NPM, [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Jekyll](https://jekyllrb.com/docs/installation/) installed.
1. Clone this repository: `git clone https://github.com/bcgov/innovation-toolkit.git`
1. Change directory into the project root: `cd innovation-toolkit`
1. Install dev dependancies: `npm install`

`npm run build` will run [Webpack](https://webpack.js.org) into order to compile SCSS and JS.

`npm run watch` will watch SCSS and JS and re-compile CSS and JS when the files are saved.

Run `bundle exec jekyll serve --watch` in order to serve the site locally. Pull requests to the source code are welcomed and appriciated.