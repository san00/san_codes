import React from 'react'

import ArticleWrapper, {
    Square,
    ArticleText,
  } from "../styles/components/article"

function Article() {
    return (
      <ArticleWrapper>
      <ArticleText>Starring the following apps and projects</ArticleText>
        <ArticleText> Shop a lot, GraphQl, React and Strapi</ArticleText>
        <ArticleText> MERN job lister, a CRUD app</ArticleText>
      </ArticleWrapper>
    )
}

export default Article
