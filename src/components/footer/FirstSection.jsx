import React from 'react';
import styled from 'styled-components';
import { SectionLink } from "react-scroll-section"

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.span`
  margin: 0 60px;
  color: #ffffff;
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover {
    color: #00f0b1;
  }
`;

const items = [
  {
    label: 'Nossos Cartões',
    section: 'cards'
  },
  {
    label: 'App e Portal',
    section: 'portal'
  },
  {
    label: 'Seguro Premiável',
    section: 'insurance'
  },
  {
    label: 'Cartão Virtual',
    section: 'virtual-card'
  }
]

const FirstSection = () => {
  return (
    <Wrapper>
      {items.map(item => (
        <SectionLink key={item.section} section={item.section}>
          {link => (
            <Item onClick={link.onClick} isActive={link.isSelected}>{item.label}</Item>
          )}
        </SectionLink>
      ))}
    </Wrapper>
  )
}

export default FirstSection;
