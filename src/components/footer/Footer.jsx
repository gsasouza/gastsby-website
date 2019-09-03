import React from 'react';
import styled from 'styled-components';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const StyledFooter = styled.footer`
  > div:first-child {
    color: #ffffff;
    height: 50px;
    background-color: black;
  }
  > div:last-child {
    height: 150px;
    background-color: #bebebe;
  }
`;

const Wrapper = styled.div`
  background-color: #f3f2f2;
  height: 200px;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <InnerWrapper
          style={{
            justifyContent: 'center'
          }}
        >
          <FirstSection/>
        </InnerWrapper>
      </Wrapper>
      <Wrapper>
        <InnerWrapper>
          <SecondSection/>
        </InnerWrapper>
      </Wrapper>
      <Wrapper>
        <InnerWrapper>
          TESTE 2
        </InnerWrapper>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer;
