import React from 'react'

import ImgCart from '../../assets/ImgCart.avif'
import lixeira from '../../assets/lixeira.svg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './style'

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()

  console.log(cartProducts)

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 60 }}>Quantidade</p>
        <p>Total</p>
        <p></p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <div className="container-lixeira">
              <button onClick={() => deleteProducts(product.id)}>
                <img src={lixeira} />
              </button>
            </div>
          </Body>
        ))
      ) : (
        <EmptyCart>
          Carrinho vazio
          <div className="container-cart">
            <img src={ImgCart} />
          </div>
        </EmptyCart>
      )}
    </Container>
  )
}
