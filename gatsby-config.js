module.exports = {
  siteMetadata: {
    title: `Osania - Software Dev`,
    description: `Osania is a software developer, making things for the web.`,
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
    // dev.to blog posts
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "san00",
      },
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
      resolve: "gatsby-remark-reading-time",
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
    },
  ],
}
