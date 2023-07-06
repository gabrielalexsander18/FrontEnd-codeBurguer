import React from 'react'

import Homelogo from '../../assets/burger-home.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './style'

export function Home() {
  return (
    <Container>
      <HomeImg src={Homelogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
