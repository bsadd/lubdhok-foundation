require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  environment: process.env.CONTENTFUL_ENV,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Lubdhok Foundation',
    description: "Lubdhok Foundation is a voluntary, non-profitable, non-governmental, non-political, and charitable organization run by Bangladesh University of Engineering & Technology (BUET) alumni enrolled in 2007-08",
    keywords: ['Lubdhok Foundation', 'Donation', 'Community', 'Lubdhok community'],
    siteUrl: 'https://www.lubdhok07.org/',
    image: 'site_preview.jpg',
    author: '@Lubdhok07found1'
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ]
}
