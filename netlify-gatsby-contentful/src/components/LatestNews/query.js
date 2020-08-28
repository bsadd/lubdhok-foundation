import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulActivity(sort: { fields: [date], order: DESC }, limit: 2) {
      edges {
        node {
          name
          date
          venueText
          media {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export const useLatestNewsData = () => {
  const data = useStaticQuery(query);
  return data.allContentfulActivity.edges;
};
