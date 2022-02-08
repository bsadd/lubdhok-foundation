import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulPaymentMethod(sort: { fields: [id], order: DESC }, limit: 2) {
      edges {
        node {
          id
          name
          description {
            childMarkdownRemark {
              html
            }
          } 
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
  console.log(data.allContentfulPaymentMethod.edges);
  return data.allContentfulPaymentMethod.edges.map(({ node }) => ({
     id: node.id,
     name: node.name,
     description: node.description.childMarkdownRemark.html,
     logo: node.logo.fluid.src,
  }));
};
