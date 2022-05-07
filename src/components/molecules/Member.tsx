import React from 'react'
import styled from 'styled-components'
import lisa from '../../assets/images/img_lisa_circle.png'



const MemberWrapper = styled.section`
    max-width: 50%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
`

const Left = styled.div`
    
`

const Right = styled.div`
    
`
const Image = styled.img`
    
`


function Member() {
  return (
    <MemberWrapper>
        <Right>
            <img src={lisa} />
        </Right>
        <Left>

        </Left>
    </MemberWrapper>
  )
}

export default Member