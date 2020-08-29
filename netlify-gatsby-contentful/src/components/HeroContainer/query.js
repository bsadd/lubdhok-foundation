import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulHeroContainer {
      edges {
        node {
          title
          shortDescription
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
  const [containerData] = data.allContentfulHeroContainer.edges;
  return containerData.node;
};
