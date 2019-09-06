import React from 'react';
import styled from 'styled-components';
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import { Section } from "react-scroll-section"

const Wrapper = styled(BackgroundImage)`
  background-size: cover;
  min-height: calc(100vh - 80px);
  display: flex;
`;

const Text = styled.div`
  max-width: 460px;
  font-size: 40px;
  text-transform: uppercase;
  margin: auto;
  color: #ffffff;
  font-style: italic;
`;


const SectionPlaceholder = styled.div`
  height: 80px;
  margin-top: -80px;
  visibility: hidden;
  background-color: transparent;
`;

const Welcome = ({ appPortalBackground }) => {
  return (
    <>
      <Section id={'portal'}>
        <SectionPlaceholder/>
      </Section>
      <Section id={'portal-content'}>
        <Wrapper Tag={`section`} fluid={appPortalBackground.childImageSharp.fluid}>
          <Text>
            Um cartão que está sempre com você em qualquer lugar do mundo
          </Text>
        </Wrapper>
      </Section>
    </>
  )
}

export const fragment = graphql`
  fragment AppPortal_images on Query {
    appPortalBackground: file(relativePath: { eq: "secao-app-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Welcome
