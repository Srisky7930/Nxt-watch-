import styled from 'styled-components'

export const PopContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
`

export const ButtonLogout = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding-right: 20px;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-width: 0px;
`

export const ButtonConfirm = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding-right: 20px;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-width: 0px;
`

export const ConfirmContainer = styled.div`
  background-color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 500px;
`

export const Para = styled.p``
