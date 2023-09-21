import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 60px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }

  @media (max-width: 428px) {
    padding: 25px;

    .container-top {
      display: grid;
      grid-gap: 10px 60px;
      grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';

      .items {
        font-size: 20px;
      }

      .items-price {
        font-size: 20px;
      }

      .delivery-tax {
        font-size: 20px;
      }

      .delivery-tax-price {
        font-size: 20px;
      }
    }

    .container-botton {
      font-size: 33px;
      margin-top: 40px;
      justify-content: space-evenly;
    }
  }
`
