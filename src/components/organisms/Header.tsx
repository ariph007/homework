import React from "react";
import logo from '../../assets/images/gtd_logo.png'
import styled from 'styled-components'


const Container = styled.section`
    max-width: 100%;
    margin: auto;
    //height: 100%; 
    background-color: #4f4d53;
    height: 48px; 
`;

const HeaderWrapper = styled.section`
    max-width: 50%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
`

const LogoWrapper = styled.section`
    
`


const Header = (props: any) => {
  return (
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            <img src={logo} alt="gtd" />
            </LogoWrapper>
          </HeaderWrapper>
    </Container>
  );
};

export default Header;
