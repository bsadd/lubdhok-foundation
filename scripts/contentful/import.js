const path = require('path');
const dotenv = require('dotenv');
const { argv } = require('yargs');
const contentfulImport = require('contentful-import');
const { exit } = require('process');
const environmentId = argv.env;
const filename = argv.filename;
const environments = ['dev', 'master'];

if (!environments.includes(environmentId)) {
  console.log('Please provide valid contentful environment.');
  exit(1);
}

if (!filename) {
  console.log('Filename required. --filename=export.json');
  exit(1);
}

dotenv.config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV || 'development'}`),
});

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  environmentId,
  contentFile: path.resolve(__dirname, `${filename}`),
};

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully')
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })