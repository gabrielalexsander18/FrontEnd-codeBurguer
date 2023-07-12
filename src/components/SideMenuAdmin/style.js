import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 80px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  text-decoration: none;
  margin-left: 12px;
`

export const PageLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-left: 40px;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    text-decoration: none;
    margin-left: 12px;
  }
`
