import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

export const socialMediaQuery = graphql`
  query {
    allContentfulSocialMedia(sort: { fields: [key], order: ASC }) {
      edges {
        node {
          key
          url
        }
      }
    }
  }
`;

export const useSocialMedia = () => {
  const data = useStaticQuery(socialMediaQuery);
  return get(data, 'allContentfulSocialMedia.edges');
};
