module.exports = {
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          primary: "blue",
          secondary: "pink",
          typography: {
            useNextVariants: true
          }
        }
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-fonts`,
      options: {
        googleFonts: {
          families: ["Roboto:400,500,500i"],
          subsets: ["greek"]
        }
      }
    },
    "gatsby-plugin-typescript"
  ]
}
