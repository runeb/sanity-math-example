import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      id
      image {
        ...SanityImage
        alt
      }
      pronounciation
      definition
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const ArticleTemplate = (props) => {
  const { data, errors } = props;
  const article = data && data.article;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {article && (
        <SEO
          title={article.title || "Untitled"}
          description={article.definitionto}
          image={article.image}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {article && <BlogPost {...article} />}
    </Layout>
  );
};

export default ArticleTemplate;
