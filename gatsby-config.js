module.exports = {
  siteMetadata: {
    title: 'Sleep Tight - A sleep timer for your Mac',
    cardImageUri: 'https://www.sleeptight.tech/twitter-card.png',
    siteUri: 'https:///www.sleeptight.tech',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-tailwind-emotion-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/catwhite32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
