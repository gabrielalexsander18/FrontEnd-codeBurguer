import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import ImgHome from '../../assets/imgHome.png'
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink, PageLink } from './style'

export function SideMenuAdmin({ path }) {
  const navigate = useNavigate()

  const { logout } = useUser()
  return (
    <Container>
      <PageLink onClick={() => navigate('/')}>
        <img src={ImgHome} alt="home" />
        <p> Home </p>
      </PageLink>

      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutOutlinedIcon style={{ color: '#FFFFFF' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
