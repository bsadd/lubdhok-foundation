const path = require('path');
const dotenv = require('dotenv');
const { argv } = require('yargs');
const contentfulExport = require('contentful-export');
const { exit } = require('process');
const environmentId = argv.env;
const environments = ['dev', 'master'];

if (!environments.includes(environmentId)) {
  console.log('Please provide valid contentful environment.');
  exit(1);
}

dotenv.config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV || 'development'}`),
});

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  environmentId,
  contentFile: path.resolve(__dirname, `export-${environmentId}.json`),
};

contentfulExport(options)
  .then((result) => {
    console.log('Your space data:', result)
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', JSON.stringify(err))
  });
  