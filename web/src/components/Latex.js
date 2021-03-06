import React, { useState, useMemo } from "react";
import KaTeX from "katex";
import "katex/dist/katex.min.css?raw";

const LatexRender = ({ isInline = false, node = {} }) => {
  const { latex } = node;
  const [html, setHtml] = useState("");
  const createHtml = () => {
    try {
      setHtml(
        KaTeX.renderToString(latex, {
          displayMode: !isInline,
          throwOnError: false,
        })
      );
    } catch { }
  };

  useMemo(createHtml, [latex, isInline]);
  if (isInline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexRender;
