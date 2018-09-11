import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      title="ProductCard Component"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Fira+Sans',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Fira+Sans',
        },
      ]}
    />
    <div
      className="content"
      style={{
        margin: '0 1.8vw',
        maxWidth: 900,
        padding: '0',
        paddingTop: 0,
        fontFamily: 'Open Sans, sans-serif',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
