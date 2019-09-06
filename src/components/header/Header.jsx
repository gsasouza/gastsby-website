import React from 'react';
import styled, { css } from 'styled-components';
import { Section } from 'react-scroll-section';

import HeaderButton from './HeaderButton';

const headerImg = require('../../images/header.jpg');
const baneseLogo = require('../../images/logo.png');

const HeaderWrapper = styled.section`
  margin-top: -120px;
  background-image: url(${headerImg});
  background-size: cover;
  min-height: 100vh;
  a {
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  padding: 0 80px;
  align-items: center;
  display: flex;
  z-index: 1;
  transition: background-color 0.3s ease;
  ${props => props.isFixed && css`background-color: #000;`}
`;

const UnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;
`;

const Nav = styled.nav`
  display: inline;
`;

const HeaderPresence = styled.div`
  width: 100%;
  height: 40px;
`;

const Logo = styled.img`
  width: 130px;
  margin-left: 15px
  ;
`;

const ButtonClient = styled.a`
  margin-left: auto;
  button {
    border: 1px solid #00f0b1;
    border-radius: 30px;    
    text-transform: uppercase;
    color: white;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 12px;
    padding: 3px 7px;
    &:hover {
      color: #000;
      background-color: #00f0b1;
    }
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

const Header = ({ children }) => {
  const [isOnTop, setIsOnTop] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) return setIsOnTop(true)
    return setIsOnTop(false)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <>
      <HeaderPresence/>
      <StyledHeader isFixed={isOnTop}>
        <Nav>
          <UnorderedList >
            {items.map(item => <HeaderButton key={item.section} section={item.section}>{item.label}</HeaderButton>)}
          </UnorderedList>
        </Nav>
        <Logo src={baneseLogo}/>
        <ButtonClient href={'https://www.banesecard.com.br/portalcliente'}>
          <button>
            Sou Cliente
          </button>
        </ButtonClient>
      </StyledHeader>
      <Section id={'header'}>
        <HeaderWrapper>
          {children}
        </HeaderWrapper>
      </Section>
    </>
  )
}

export default Header;
