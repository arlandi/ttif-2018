import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/bootstrap.css'
import '../styles/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Trade Tourism Investment Forum 2018' },
            { name: 'keywords', content: 'trade, tourism, indonesia' },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet" />
        </Helmet>
        {children}
      </>
    )}
  />
)

export default Layout
