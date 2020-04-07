/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createArticlePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityArticle(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const articleEdges = (result.data.allSanityArticle || {}).edges || [];

  articleEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/articles/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createArticlePages(graphql, actions);
};
