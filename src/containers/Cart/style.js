import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);

  @media (max-width: 428px) {
    min-height: calc(100vh - 62px);
  }
`

export const CartImg = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 428px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
