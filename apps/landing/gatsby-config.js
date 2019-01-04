module.exports = {
  siteMetadata: {
    title: "CommuniTii"
  },
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              light: "#80d6ff",
              main: "#42a5f5",
              dark: "#0077c2",
              contrastText: "#fff"
            },
            secondary: {
              light: "#ff6090",
              main: "#e91e63",
              dark: "#b0003a",
              contrastText: "#fff"
            }
          },
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
