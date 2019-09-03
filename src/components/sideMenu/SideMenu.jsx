import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  right: 150px;
  color: #ffffff;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 150px auto auto;
  > span {
    text-align: end;
  }
`;

const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const items = [
  {
    label: 'Bem vindo(a)'
  },
  {
    label: 'Nossos Cartões'
  },
  {
    label: 'App e Portal'
  },
  {
    label: 'Seguro Premiável'
  },
  {
    label: 'Cartão Virtual'
  }
]

const SideMenu = () => {
  return (
    <Wrapper>
      {items.map(item => (
        <Row>
          <span>
            {item.label}
          </span>
          <Circle />
        </Row>
      ))}
    </Wrapper>
  )
}

export default SideMenu;
