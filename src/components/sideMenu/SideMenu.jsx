import React from 'react';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';

const Wrapper = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.3s ease-in;
  position: fixed;
  min-width: 160px;
  right: 120px;
  color: #ffffff;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const Label = styled.span`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.3s ease-in;
`;

const items = [
  {
    section: ['welcome'],
    label: 'Bem vindo(a)'
  },
  {
    section: showCards => showCards ? ['cards', 'cards2'] : ['cards'],
    label: 'Nossos Cartões'
  },
  {
    section: showCards =>  showCards ? ['portal', 'portal-content'] : ['portal', 'portal-content', 'cards2'],
    label: 'App e Portal'
  },
  {
    section: ['insurance'],
    label: 'Seguro Premiável'
  },
  {
    section: ['virtual-card'],
    label: 'Cartão Virtual'
  }
]

const SideMenu = ({ showCards }) => {
  const checkSelected = (allLinks, section) => {
    const arr = Array.isArray(section) ? section : section(showCards);
    return arr.reduce((acc, cur) => {
      const link = allLinks[cur];
      if (link) return acc || link.selected;
      return acc || false;
    }, false);
  }
  return (
    <SectionLinks>
      {({ allLinks }) => {
        const { header } = allLinks;
        return (
          <Wrapper show={header && !header.selected}>
            {items.map(item => (
              <Row key={item.label}>
                <Label show={checkSelected(allLinks, item.section)}>
                  {item.label}
                </Label>
                <Circle />
              </Row>
            ))}
          </Wrapper>
        )
      }}
    </SectionLinks>

  )
}

export default SideMenu;
