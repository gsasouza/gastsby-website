import React from 'react';
import styled from 'styled-components';

import SideMenu from '../sideMenu/SideMenu'
import { Section } from "react-scroll-section"

const bgImage = require('../../images/secao-seguro-bg.jpg')

const Wrapper = styled.section`
  background-image: url(${bgImage});
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

const Welcome = () => {
  return (
    <>
      <Section id={'insurance'}>
        <SectionPlaceholder/>
      </Section>
      <Wrapper>
        <Text>
          Um cartão que está sempre com você em qualquer lugar do mundo
        </Text>
      </Wrapper>
    </>

  )
}

export default Welcome
