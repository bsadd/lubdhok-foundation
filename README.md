# Lubdhok Foundation Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd7ce725-49c3-4df7-9ab8-9e488736c604/deploy-status)](https://app.netlify.com/sites/lubhdhok-foundation-dev/deploys)

## Tech Stack

- [Gatsby](https://www.gatsbyjs.org/) with [React](https://reactjs.org/)
- [Contentful](https://www.contentful.com)
- [Netlify](https://www.netlify.com)

## Prerequisites

1. Install nvm by the following command

```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

2. Install specific node version (10.22.0 Recommended)

```bash
  nvm install 10.22.0
  nvm use 10.22.0
```

3. Install yarn (follow this [instruction](https://classic.yarnpkg.com/en/docs/install))

```bash
   brew install yarn
```

## Getting Started

1. Go to the directory

```bash
 cd netlify-gatsby-contentful
```

2. Install packages

```bash
  yarn
```

3. Create a file `.env.development` and paste the following with proper `CONTENTFUL_SPACE_ID`,  `CONTENTFUL_ACCESS_TOKEN` and `CONTENTFUL_MANAGEMENT_TOKEN`

```json
CONTENTFUL_SPACE_ID='<Get the spaceId from contentful Settings > API Keys > Content Delivery Token'
CONTENTFUL_ACCESS_TOKEN='<Get the spaceId from contentful Settings > API Keys > Content Delivery Token>'
CONTENTFUL_MANAGEMENT_TOKEN='<Get management token from Settings > API Keys > Content Management Token'
CONTENTFUL_ENV='dev'
```

4. Follow the commands

### `yarn run dev`

Run in the project locally and visit http://localhost:8000

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

## Import-Export Contentful Data

To export dev environment data

```bash
  yarn run export:dev
```

To export master environment data

```bash
  yarn run export:master
```

To import dev environment data

```bash
  yarn run import:dev --filename=<name of the file you want to import>
```

To import master environment data.
<strong style="color: red"> BE CAREFUL WHILE RUNNING THIS SCRIPT. IT WILL OVERWRITE ALL THE MASTER CONTENTS</strong>

```bash
  yarn run import:master --filename=<name of the file you want to import>
```
