import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

export const navigationLinkQuery = graphql`
  query {
    allContentfulNavigationLink(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          name
          url
          icon
        }
      }
    }
  }
`;

export const useNavigationLink = () => {
  const data = useStaticQuery(navigationLinkQuery);
  return get(data, 'allContentfulNavigationLink.edges');
};
