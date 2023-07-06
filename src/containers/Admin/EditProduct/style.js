import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  h1 {
    font-size: 60px;
    font-weight: 300;
    display: flex;
  }

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  padding-left: 10px;
  min-width: 290px;
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;

  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`
