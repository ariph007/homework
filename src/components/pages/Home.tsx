import React from 'react'
import Typography from '../atom/Typography'
import Content from '../molecules/Content'
import Team from '../molecules/Team'
import Banner from '../organisms/Banner'
import Header from '../organisms/Header'

const Home = () => {
  return (
    <div>
    <Header />
      <Banner>
        <Typography variant='h1'>Hello, we’re gtd</Typography>
      </Banner>
      <Team/>
      <Content/>
    </div>
  )
}

export default Home