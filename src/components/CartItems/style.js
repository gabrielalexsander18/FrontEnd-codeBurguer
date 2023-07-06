import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  width: max-content;
  gap: 10px 15px;

  img {
    border-radius: 10px;
    width: 130px;
  }

  p {
    font-size: 16px;
    color: #000000;
  }

  .container-lixeira {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    img {
      width: 40px;
    }
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }
  }
`

export const EmptyCart = styled.p`
  font-size: 25px;
  padding: 30px 20px 20px;
  text-align: center;
  font-weight: bold;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container-cart {
    img {
      width: 200px;
    }
  }
`
