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
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      plugins: [
        {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
            fonts: [
              `Quicksand`,
              "Mukta Vaani",
              // you can also specify font weights and styles
            ],
            display: "swap",
          },
        },
      ],
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    // Links dev.to blog posts
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "san00",
      },
    },
  ],
}
