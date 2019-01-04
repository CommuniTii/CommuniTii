import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { node } from "prop-types"

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Helmet defaultTitle={data.site.siteMetadata.title}>
          <html lang="en" amp />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: node
}

export default Layout
