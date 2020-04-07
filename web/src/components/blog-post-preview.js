import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.image && props.image.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.image))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.image.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{props.definition}</div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
