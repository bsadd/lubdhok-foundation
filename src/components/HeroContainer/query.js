import { useState, useEffect } from 'react';
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
          order
          backgroundImage {
            fluid {
              src
            }
          }
          backgroundSmallImage {
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
  const [containerItems, setContainerItems] = useState([]);
  useEffect(() => {
    const items =  data.allContentfulHeroContainer.edges.map((item) => item.node);
    const sortedItems = [...items].sort((a, b) => a.order > b.order ? 1 : -1);
    setContainerItems(sortedItems);
  }, []);
  return containerItems;
};
