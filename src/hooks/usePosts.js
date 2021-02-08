import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allDevArticles(limit: 10) {
        edges {
          node {
            article {
              cover_image
              url
              title
              published_at(formatString: "MM-DD-YYYY")
              description
            }
          }
        }
      }
    }
  `)
  return data.allDevArticles.edges.map(post => ({
    image: post.node.article.cover_image,
    url: post.node.article.url,
    title: post.node.article.title,
    date: post.node.article.published_at,
    desc: post.node.article.description,
  }))
}
export default usePosts
