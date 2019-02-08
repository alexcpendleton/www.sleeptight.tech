import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'
import demo from '../images/demo.gif'

const Header = styled.h1`
  ${tw`font-serif`}
`
const DownloadButton = styled.a`
  ${tw`inline-block bg-purple-dark hover:bg-purple text-white font-bold py-2 px-4 mb-6 rounded`};
`
const MainContainer = styled.main`
  ${tw`text-center`};
`
const IndexPage = () => (
  <Layout>
    <MainContainer>
      <Header>Sleep Tight</Header>
      <p>
        A sleep timer for your Mac. Mouse-powered for your sleepy brain and
        tired hands.
      </p>
      <DownloadButton href={withPrefix('/Sleep.Tight-1.0.0.dmg')}>
        <span>Download v1.0.0</span>
      </DownloadButton>
      <figure>
        <img
          src={demo}
          width="600"
          height="273"
          alt="Video demonstration of how to use the application by clicking the menubar icon, then using the slider which appears to choose an amount of time."
        />
      </figure>
    </MainContainer>
  </Layout>
)

export default IndexPage
