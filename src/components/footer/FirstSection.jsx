import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.a`
  margin: 0 60px;
  color: #ffffff;
  transition: all 0.1s ease;
  &:hover {
    color: #00f0b1;
  }
`;

const items = [
  {
    label: 'Nossos Cartões',
    to: '/#cards'
  },
  {
    label: 'App e Portal',
    to: '/#portal'
  },
  {
    label: 'Seguro Premiável',
    to: '/#insurance'
  },
  {
    label: 'Cartão Virtual',
    to: '/#virtual-card'
  }
]

const FirstSection = () => {
  return (
    <Wrapper>
      {items.map(item => <Item href={item.to}>{item.label}</Item>)}
    </Wrapper>
  )
}

export default FirstSection;
