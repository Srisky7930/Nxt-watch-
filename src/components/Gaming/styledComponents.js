import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const GamingCard = styled.div``

export const GamingDetailContainer = styled.div``

export const GamingHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
  }
`

export const GamingHeadingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  }
`

export const GamingImageContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
  margin-top: 60px;
`

export const GamingOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
  justify-content: center;
`

export const GamingTitle = styled.p`
  font-size: 20px;
  font-weight: 500px;
  font-family: 'Roboto';
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`
export const GamingView = styled.p`
  font-size: 14px;
  color: #7e858e;
`

export const GamingImage = styled.img`
  height: 350px;
  width: 250px;
  margin-right: 30px;
`

export const SideBarContainer = styled.div`
  color: red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const GamingLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const RetryButton = styled.button`
  background-color: Blue;
  color: #ffffff;
  cursor: pointer;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  border-width: 0px;
  border-radius: 8px;
  margin-bottom: 30px;
`

export const FailureContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
`
export const FailureImage = styled.img`
  height: 100px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isTheme ? '#000000' : '#ffffff')};
`

export const FailurePara = styled.p`
  color: ${props => (props.isTheme ? '##000000' : '#ffffff')};
`

export const FailureImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`
