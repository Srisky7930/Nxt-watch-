import styled from 'styled-components'

export const ImageEl = styled.img`
  width: 90%;
  @media (min-width: 768px) {
    width: 40%;
  }
`
export const DivEl = styled.div`
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  display: flex;
  @media (max-width: 767px) {
    padding: 20px 20px;
    padding-bottom: 0;
    height: 100vh;
    overflow: hidden;
  }
`
export const Header = styled.h1``

export const Para = styled.p``

export const NotFoundContainer = styled.div`
  display: flex;
`

export const NotFoundImage = styled.img``

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ;
  align-items: center;
`
