# Lubdhok Foundation Site

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

3. Create a file `.env.development` and paste the following with proper `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`

```json
CONTENTFUL_SPACE_ID='<Get the spaceId from contentful Settings > API Keys > Content Delivery Token'
CONTENTFUL_ACCESS_TOKEN='<Get the spaceId from contentful Settings > API Keys > Content Delivery Token>'
```
4. Follow the commands

### `yarn run dev`

Run in the project locally and visit http://localhost:8000

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.

