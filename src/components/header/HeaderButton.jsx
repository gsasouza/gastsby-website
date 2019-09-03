import React from 'react';
import styled, { css } from 'styled-components';

const ListItem = styled.li`
  display: inline;
  margin: 20px;
  color: #ffffff;
  padding-bottom: 5px;
  transition: all 0.1s ease;
  ${props => props.isActive && css`border-bottom: 2px solid #00f0b19c;`}
  &:hover {
    color: #00f0b1;
  }
`;

const HeaderButton = ({ children, to }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <a href={to} getProps={({ isActive }) => setIsActive(isActive)}>
      <ListItem isActive={isActive}>{children}</ListItem>
    </a>
  )
}

export default HeaderButton;
