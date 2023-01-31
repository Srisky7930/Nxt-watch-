import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 18vw;
  min-height: 55vh;
  margin-bottom: 60px;
`

export const LinkCard = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`

export const Home = styled.p`
  margin-left: 10px;
  color: ${props => (props.isTheme ? '#000000' : '#f9f9f9')};
`

export const SideBarMainContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`

export const SocialContainer = styled.div``

export const SocialHeading = styled.p`
  color: ${props => (props.isTheme ? '#313131' : '#f9f9f9')};
  font-family: 'Roboto';
`

export const SocialLogoCard = styled.div``

export const ParaText = styled.p`
  width: 200px;
  color: ${props => (props.isTheme ? '#424242;' : '#f9f9f9')};
`

export const SocialImg = styled.img`
  height: 30px;
  margin-right: 10px;
`
