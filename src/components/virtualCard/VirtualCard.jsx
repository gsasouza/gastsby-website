import React from 'react';
import styled from 'styled-components';
import { Section } from "react-scroll-section"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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

const Welcome = ({ virtualCardBackground }) => {
  return (
    <>
      <Section id={'virtual-card'}>
        <SectionPlaceholder/>
      </Section>
      <Wrapper Tag={`section`} fluid={virtualCardBackground.childImageSharp.fluid}>
        <Text>
          Um cartão que está sempre com você em qualquer lugar do mundo
        </Text>
      </Wrapper>
    </>
  )
}

export const fragment = graphql`
  fragment VirtualCard_images on Query {
    virtualCardBackground: file(relativePath: { eq: "secao-cartao-virtual.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Welcome
