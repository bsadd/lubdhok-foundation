import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulHeroContainer(sort: { fields: [id], order: ASC }) {
      edges {
        node {
          title
          shortDescription
          actionLabel
          actionLink
          backgroundImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export const useHeroContainerData = () => {
  const data = useStaticQuery(query);
  return data.allContentfulHeroContainer.edges.map((item) => item.node);
};
