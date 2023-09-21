import styled from 'styled-components'

import BackgroundImage from '../../assets/background-login.svg'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 70%;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    background: rgba(55, 55, 55, 0.95);
    border-radius: 10px;
    height: ${px2vw(1700)};
    padding: 25px 55px;

    h1 {
      font-size: 50px;
      line-height: 50px;
      margin-top: ${px2vw(120)};
    }
  }

  @media (max-width: 428px) {
    height: ${px2vw(2200)};
    padding: 0 25px;

    h1 {
      font-size: ${px2vw(140)};
      line-height: ${px2vw(120)};
      margin-top: ${px2vw(80)};
    }
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 23px;
    line-height: 23px;
  }

  @media (max-width: 428px) {
    font-size: 20px;
    line-height: 20px;
    margin-top: ${props => (props.error ? px2vw(12) : px2vw(30))};
    margin-bottom: ${px2vw(10)};
  }
`

export const Imput = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;

  @media (max-width: 768px) {
    width: ${px2vw(1050)};
    height: ${px2vw(90)};
    padding-left: 17px;
  }

  @media (max-width: 428px) {
    width: ${px2vw(1190)};
    height: ${px2vw(130)};
  }
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 21px;
    line-height: 21px;
  }

  @media (max-width: 428px) {
    font-size: 18.5px;
    line-height: 18.5px;
  }
`
