import React from 'react';
import styled, { css } from 'styled-components';
import { SectionLink } from 'react-scroll-section';

const ListItem = styled.li`
  display: inline;
  margin: 20px;
  color: #ffffff;
  padding-bottom: 5px;
  transition: all 0.1s ease;
  cursor: pointer;
  ${props => props.isActive && css`border-bottom: 2px solid #00f0b19c;`}
  &:hover {
    color: #00f0b1;
  }
`;

const HeaderButton = ({ children, section }) => {
  return (
    <SectionLink section={section} style={{ cursor: 'pointer' }}>
      {link => (
        <ListItem onClick={link.onClick} isActive={link.isSelected}>{children}</ListItem>
      )}
    </SectionLink>
  )
}

export default HeaderButton;
