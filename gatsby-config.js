module.exports = {
  siteMetadata: {
    title: "Michał Dąbrowski",
    author: "Michał Dąbrowski",
    description: "Michał Dąbrowskis personal site."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Michał Dąbrowski',
        short_name: 'mdabrowski.eu',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-dev",
      options: {
        username: 'mdabrowskieu'
      }
    }
  ],
};
