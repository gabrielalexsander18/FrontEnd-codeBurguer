import React from 'react'

import Cartlogo from '../../assets/burger-cart.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './style'

export function Cart() {
  return (
    <Container>
      <CartImg src={Cartlogo} alt="logo da carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
