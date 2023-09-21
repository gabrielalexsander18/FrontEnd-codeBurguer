import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const ContainerButton = styled.button`
  width: 182.81px;
  height: 36.13px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #eeeeee;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: ${px2vw(500)};
    height: ${px2vw(90)};
    border-radius: 50px;

    font-size: 25px;
    line-height: 25px;
  }

  @media (max-width: 428px) {
    width: ${px2vw(700)};
    height: ${px2vw(135)};

    font-size: 20px;
    line-height: 20px;
  }
`
