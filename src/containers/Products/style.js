import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);

  @media (max-width: 428px) {
    min-height: calc(100vh - 62px);
  }
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 428px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 17px;
  }
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a90')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;

  @media (max-width: 428px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    padding: 20px;
    margin-top: 15px;
  }
`
