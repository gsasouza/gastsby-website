import React from 'react';
import styled, { css } from 'styled-components';

import SideMenu from '../sideMenu/SideMenu'

const bgImage = require('../../images/secao-seguro-bg.jpg')

const Wrapper = styled.section`
  background-image: url(${bgImage});
  background-size: cover;
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

const Welcome = ({ show, hideCards }) => {
  return (
    <Wrapper id="cards" show={show}>
      <Text>
        Um cartão que está sempre com você em qualquer lugar do mundo
      </Text>
      <span onClick={hideCards}>Voltar</span>
      <SideMenu/>
    </Wrapper>
  )
}

export default Welcome
