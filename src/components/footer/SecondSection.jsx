import React from 'react';
import styled, { css } from 'styled-components';

const logo = require('./imgs/footer-logo.png');
const footer1 = require('./imgs/rodape-2.png');
const footer2 = require('./imgs/rodape-3.png');
const footer3 = require('./imgs/rodape-4.png');
const footer4 = require('./imgs/rodape-5.png');

const Item = styled.img`
  ${props => props.width && css`width: ${props.width}px;`}
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  height: 100%;
`;

const Divider = styled.hr`
  height: 170px;
  width: 2px;
  background-color: #bebebe6b;
  border: none;
  margin: 0 2px;
`;

const SecondSection = () => {
  return (
    <>
      <ItemWrapper>
        <Item src={logo} width={130}/>
      </ItemWrapper>
      <Divider/>
      <ItemWrapper>
        <Item src={footer1} width={150}/>
      </ItemWrapper>
      <Divider/>
      <ItemWrapper>
        <Item
          src={footer2}
          width={150}
          style={{
            margin: 'auto 0',
            marginTop: 26
          }}
        />
      </ItemWrapper>
      <Divider/>
      <ItemWrapper>
        <Item
          src={footer3}
          width={70}
          style={{
            margin: 'auto 0',
            marginTop: 26,
            marginRight: 'auto',
            justifyContent: 'flex-start'
          }}
        />
      </ItemWrapper>
      <Divider/>
      <ItemWrapper>
        <Item
          src={footer4}
          width={30}
          style={{
            margin: 'auto 0',
            marginTop: 26,
            marginRight: 'auto',
          }}
        />
      </ItemWrapper>
    </>
  )
}

export default SecondSection;
