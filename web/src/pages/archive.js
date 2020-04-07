import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
    articles: allSanityArticle(
      sort: { fields: [_createdAt], order: DESC }
      filter: { slug: { current: { ne: null } } }
    ) {
      edges {
        node {
          id
          definition
          image {
            ...SanityImage
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const articleNodes = data && data.articles && mapEdgesToNodes(data.articles);

  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <h1 className={responsiveTitle1}>Archive</h1>
        {articleNodes && articleNodes.length > 0 && <BlogPostPreviewGrid nodes={articleNodes} />}
      </Container>
    </Layout>
  );
};

export default ArchivePage;
