import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProducts from './EditProduct'
import ListProducts from './ListProducts'
import NewProducts from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()

  return (
    <Container>
      <SideMenuAdmin path={locationPathname} />
      <ContainerItens>
        {locationPathname === paths.Order && <Orders />}
        {locationPathname === paths.ListProducts && <ListProducts />}
        {locationPathname === paths.NewProducts && <NewProducts />}
        {locationPathname === paths.EditProduct && <EditProducts />}
      </ContainerItens>
    </Container>
  )
}
