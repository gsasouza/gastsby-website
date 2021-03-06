import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Section, SectionLink } from "react-scroll-section"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Wrapper = styled(BackgroundImage)`
  background-size: cover;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  span:last-child {
    > svg {
      transition: all 0.1s ease;
      &:hover {
        color: #00f0b1;
      }
      cursor: pointer;
    }    
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
`;

const Text = styled.div`
  max-width: 460px;
  font-size: 40px;
  text-transform: uppercase;
  margin: auto;
  color: #ffffff;
  font-style: italic;
`;

const LabelCard = styled.span`
  color: #ffffff;
  text-align: center;
`;

const SectionPlaceholder = styled.div`
  height: 80px;
  margin-top: -80px;
  visibility: hidden;
  background-color: transparent;
`;

const Welcome = ({ showCards, welcomeBackground }) => {
  return (
    <>
      <Section id="cards">
        <SectionPlaceholder />
      </Section>
      <Wrapper Tag={`section`} fluid={welcomeBackground.childImageSharp.fluid}>
        <Row>
          <Text>
            Um cartão que está sempre com você em qualquer lugar do mundo
          </Text>
        </Row>
        <LabelCard> Escolha o nosso cartão que mais combina com seu estilo de vida</LabelCard>
        <LabelCard style={{
          marginBottom: 50,
        }}>
          <SectionLink section={'cards2'}>
            {link => <FaChevronDown onClick={() => {
              showCards();
              setTimeout(link.onClick, 100);
            }} size={'80px'}/> }
          </SectionLink>
        </LabelCard>
      </Wrapper>
    </>
  )
}

export const fragment = graphql`
  fragment Welcome_images on Query {
    welcomeBackground: file(relativePath: { eq: "welcome.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Welcome
