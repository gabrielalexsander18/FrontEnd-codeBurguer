import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/Cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRigth,
  ContainerText,
  Line,
  PageLinkExit,
  PageLinkAdmin
} from './style'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRigth>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLinkAdmin onClick={() => navigate('/pedidos')}>
          <img src={Person} alt="logo-pessoa" />
        </PageLinkAdmin>
        <ContainerText>
          <p>ola, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigth>
    </Container>
  )
}
