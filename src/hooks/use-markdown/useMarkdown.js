import React, { useState, useEffect } from "react";
import marked from "marked";
import DOMPurify from "dompurify";

/**
 * Loads a markdown file and returns as renderable markdown or HTML.
 * @param  {file} file The imported markdown file.
 * @return {object}    The renderable `{markdown, html}` version of the file.
 */
const useMarkdown = (file) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, [file]);

  const html = (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdown) }} />
  );

  return { markdown: markdown, html: html };
};

export default useMarkdown;
