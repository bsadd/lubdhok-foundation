import get from 'lodash/get';

export const getLogo = data => {
  const logoNode = get(data, 'allContentfulLogo.edges[0].node');
  return {
    src: logoNode.image ? logoNode.image.fluid.src : '',
    alt: logoNode.alt,
    logoText: logoNode.logoText,
    logoLongText: logoNode.logoLongText,
  };
};

export const getLayoutData = data => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const socialMediaLinks = get(data, 'allContentfulSocialMedia.edges');
  const logo = getLogo(data);
  const navigationLink = get(data, 'allContentfulNavigationLink.edges');
  return {
    siteTitle,
    socialMediaLinks,
    logo,
    navigationLink,
  };
};
