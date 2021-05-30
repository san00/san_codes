module.exports = {
  siteMetadata: {
    title: `sancodes`,
    description: `A little piece of the web for Osania's portfolio.`,
    author: `@sancodes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/mernBlueBkgrnd.png`,
      },
      plugins: [
        {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
            fonts: [`Quicksand`, "Mukta Vaani"],
            display: "swap",
          },
        },
      ],
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    // MDX blog posts
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
    },
  ],
}
