import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import { Section } from "react-scroll-section"
import { graphql } from "gatsby"


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

const Welcome = ({ insuranceBackground }) => {
  return (
    <>
      <Section id={'insurance'}>
        <SectionPlaceholder/>
      </Section>
      <Wrapper Tag={`section`} fluid={insuranceBackground.childImageSharp.fluid}>
        <Text>
          Um cartão que está sempre com você em qualquer lugar do mundo
        </Text>
      </Wrapper>
    </>
  )
}


export const fragment = graphql`
  fragment Insurance_images on Query {
    insuranceBackground: file(relativePath: { eq: "secao-seguro-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Welcome
