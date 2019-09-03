import React from 'react';
import styled from 'styled-components';

import SideMenu from '../sideMenu/SideMenu'

const bgImage = require('../../images/secao-cartao-virtual.jpg')

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

const Welcome = () => {
  return (
    <Wrapper id="virtual-card">
      <Text>
        Um cartão que está sempre com você em qualquer lugar do mundo
      </Text>
      <SideMenu/>
    </Wrapper>
  )
}

export default Welcome
