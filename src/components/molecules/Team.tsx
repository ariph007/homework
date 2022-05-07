import React from 'react'
import styled from 'styled-components'
import lisa from '../../assets/images/img_lisa_circle.png'
import brian from '../../assets/images/img_brian_circle.png'
import daniel from '../../assets/images/img_danielle_circle.png'


const Container = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin-top: -100px;
`;

const TeamWrapper = styled.section`
    display: flex;
    justify-content: space-around;
`



const Team = (props:any) => {
  return (
    <Container>
        <TeamWrapper>
            <img src={lisa} alt="lisa gtd" />
            <img src={daniel} alt="danielle gtd" />
            <img src={brian} alt="brian gtd" />
        </TeamWrapper>
    </Container>
  )
}

export default Team