import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#212121')};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  height: 30px;
`

export const WebsiteLogoContainer = styled.div``
export const LinkLists = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LinkItem = styled.ul`
  list-style-type: none;
`

export const ButtonLight = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 20px;
  cursor: pointer;
`

export const ContactImage = styled.img`
  height: 30px;
`
