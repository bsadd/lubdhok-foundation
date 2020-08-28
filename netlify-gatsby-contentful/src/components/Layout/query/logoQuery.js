import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

export const logoQuery = graphql`
  query {
    allContentfulLogo {
      edges {
        node {
          logoText
          logoLongText
          alt
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export const useLogo = () => {
  const data = useStaticQuery(logoQuery);
  const logoNode = get(data, 'allContentfulLogo.edges[0].node');
  return {
    src: logoNode.image ? logoNode.image.fluid.src : '',
    alt: logoNode.alt,
    logoText: logoNode.logoText,
    logoLongText: logoNode.logoLongText,
  };
};

// export const navigationLinkQuery = graphql`
//   query {
//     allContentfulNavigationLink(sort: { fields: [order], order: ASC }) {
//       edges {
//         node {
//           name
//           url
//           icon
//         }
//       }
//     }
//   }
// `;

// export const useNavigationLink = () => {
//   const data = useStaticQuery(navigationLinkQuery);
//   return get(data, 'allContentfulNavigationLink.edges');
// };
