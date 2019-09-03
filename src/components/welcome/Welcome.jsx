import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

import SideMenu from '../sideMenu/SideMenu'

const bgImage = require('../../images/welcome.jpg')

const Wrapper = styled.section`
  background-image: url(${bgImage});
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

const Welcome = ({ showCards }) => {
  return (
    <Wrapper id="card">
      <Row>
        <Text>
          Um cartão que está sempre com você em qualquer lugar do mundo
        </Text>
        <SideMenu/>
      </Row>
      <LabelCard> Escolha o nosso cartão que mais combina com seu estilo de vida</LabelCard>
      <LabelCard style={{
        marginBottom: 50,
      }}>
        <FaChevronDown onClick={showCards} size={'80px'}/>
      </LabelCard>
    </Wrapper>
  )
}

export default Welcome
