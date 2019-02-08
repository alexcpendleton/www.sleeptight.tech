import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import './layout.css'

const Content = styled.div`
  ${tw`px-32 py-8 bg-purple-darkest text-white font-serif`};
`

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
            { name: 'description', content: 'A sleep timer for your Mac.' },
            {
              name: 'keywords',
              content: 'sleep, timer, mac, open source, free',
            },
          ]}
        >
          <html lang="en" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@alexcpendleton" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta
            name="twitter:image"
            content="https://www.sleeptight.tech/twitter-card.png"
          />
        </Helmet>
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
