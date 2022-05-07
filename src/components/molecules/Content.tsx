import React from 'react'
import styled from 'styled-components'
import Typography from '../atom/Typography';

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin-top: -100px;
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    max-width: 50vw;
    text-align: center;
`


const Content = () => {
  return (
    <Container>
        <ContentWrapper>
            <Typography variant='h2'>How it started</Typography>
            <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id est laborum.</Typography>
        </ContentWrapper>
    </Container>
  )
}

export default Content