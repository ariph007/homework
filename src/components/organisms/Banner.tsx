import React from 'react'
import styled from 'styled-components'
import banner from '../../assets/images/img_hero.jpg'

interface BannerProps {
    children: React.ReactNode;
  }


  const Container = styled.section`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: auto;
  background-image: url(${banner});
  height: 65vh;
  background-position: right;
  background-size: cover;
  
`;

const BannerWrapper = styled.section`
  max-width: 50%;
  display: flex;
  /* justify-content: center;
  justify-items: center;
  align-items: center; */
  text-align: center;
  height: 100%;
  margin-top: -50px;
`

const Banner = (props: BannerProps) => {
  return (
    <Container>
        <BannerWrapper>{props.children}</BannerWrapper>
    </Container>
  )
}

export default Banner