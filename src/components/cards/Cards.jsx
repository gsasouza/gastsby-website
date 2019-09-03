import React from 'react';
import styled, { css } from 'styled-components';

import SideMenu from '../sideMenu/SideMenu'
import { Section, SectionLink } from "react-scroll-section"


const Wrapper = styled.section`
  background-color: #000;
  min-height: ${props => props.show ? 'calc(100vh - 80px)': '0'};
  ${props => !props.show && css`height: 0;`};
  overflow: hidden;
  transition: all 0.3s ease;
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

const Cards = [
  {

  }
]

const Welcome = ({ show, hideCards }) => {
  return (
    <>
      <Section id={'cards2'}>
        <SectionPlaceholder/>
      </Section>
      <Wrapper show={show}>
        <Text>
          Um cartão que está sempre com você em qualquer lugar do mundo
        </Text>
        <SectionLink section={'cards'}>
          {link => <span onClick={() => {
            hideCards();
            link.onClick();
          }}>Voltar</span> }
        </SectionLink>

        <SideMenu/>
      </Wrapper>
    </>
  )
}

export default Welcome
