import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulPaymentMethod(sort: { fields: [date], order: DESC }, limit: 2) {
      edges {
        node {
          id
          name
          details
          logo {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export const usePaymentMethodData = () => {
  const data = useStaticQuery(query);
  return data.allContentfulPaymentMethod.edges;
};
