module.exports = {
  siteMetadata: {
    title: "Sumit Patel",
    description: "A description for your site",
    // ... other metadata
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/Assets/Image/`, // Adjust the path based on your project structure
      },
    },
    // ... other plugins
  ],
}
