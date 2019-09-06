import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MdDone } from 'react-icons/md';

import useDebounce from '../../hooks/useDebounce';
import { Section, SectionLink } from "react-scroll-section"

const Wrapper = styled.section`
  background-color: #000;
  min-height: ${props => props.show ? 'calc(100vh - 80px)': '0'};
  ${props => !props.show && css`height: 0;`};
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  max-width: 460px;
  font-size: 15px;
  margin: 10px 0;
  span {
    font-weight: bold;
  }
  text-transform: uppercase;
  color: #ffffff;
`;

const SectionPlaceholder = styled.div`
  height: ${props => props.show ? '80px' : 0};
  margin-top: ${props => props.show ? '-80px' : 0};
  visibility: hidden;
  background-color: transparent;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Advantage = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

const BackButton = styled.span`
  color: #ffffff;
  transition: all 0.1s ease;
  border-bottom: 1px solid #ffffff;
  width: 45px;
  cursor: pointer;
  &:hover {
    color: #00f0b1;
    border-color:  #00f0b1;
  }
`;

const cards = [
  {
    image: 'international',
    label: <Text> Banese Card <span>Internacional</span></Text>,
    advantages: [
      'Sem anuidade',
      'Aceitação internacional',
      'Atendimento 24 horas',
      'Wi-fi no Brasil',
    ]
  },
  {
    image: 'carajas',
    label: <Text> Banese Card <span>Carajás</span></Text>,
    advantages: [
      'Sem anuidade',
      'Benefícios exclusivos nas lojas Carajás',
      'Seguro viagem',
      'Wi-fi no Brasil',
    ]
  },
  {
    image: 'nanquim',
    label: <Text> Banese Card <span>Nanquim</span></Text>,
    advantages: [
      'Anuidade diferenciada',
      'Sala VIP',
      'Chip internacional',
      'Seguro viagem',
    ]
  }
]

const Welcome = ({ show, hideCards, ...props }) => {
  return (
    <>
      <Section id={'cards2'}>
        <SectionPlaceholder show={show}/>
      </Section>
      <Wrapper show={show}>
        <Row style={{ margin: 'auto' }}>
          <Row style={{ justifyContent: 'space-evenly'}}>
            {cards.map(card => (
              <Column key={card.image}>
                {card.label}
                <Img fixed={props[card.image].childImageSharp.fixed} />
                <Column>
                  {card.advantages.map(advantage => (
                    <Row key={advantage} style={{ marginTop: 15,justifyContent: 'flex-start'}}>
                      <MdDone color={'#fff'}/>
                      <Advantage>
                        {advantage}
                      </Advantage>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Row>
        </Row>
        <SectionLink section={'cards'}>
          {link => <BackButton
            onClick={() => {
              link.onClick();
              setTimeout(hideCards, 200);
            }}
            style={{
              alignSelf: 'center',
              marginBottom: 30
            }}
          >Voltar </BackButton>}
        </SectionLink>
      </Wrapper>
    </>
  )
}


export const fragment = graphql`
  fragment Cards_images on Query {
    international: file(relativePath: { eq: "banese-card-01.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 230, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    carajas: file(relativePath: { eq: "banese-card-02.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 245, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nanquim: file(relativePath: { eq: "banese-card-03.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 245, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Welcome
