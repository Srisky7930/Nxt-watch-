import {Link, withRouter} from 'react-router-dom'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

import ReactPopUp from '../ReactPopUp'
import ThemeContext from '../context/ThemeContext'

import {
  NavbarContainer,
  WebsiteLogo,
  WebsiteLogoContainer,
  LinkLists,
  ButtonLight,
  ContactImage,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme, changeTheme} = value

      const onClickButton = () => {
        changeTheme()
      }

      return (
        <NavbarContainer isTheme={isTheme}>
          <WebsiteLogoContainer>
            {isTheme ? (
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            ) : (
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}
          </WebsiteLogoContainer>
          <LinkLists>
            <ButtonLight
              type="button"
              onClick={onClickButton}
              data-testid="theme"
            >
              {isTheme ? <FaMoon fontSize={25} /> : <FiSun color="#ffffff" />}
            </ButtonLight>
            <ButtonLight type="button" data-testid="profile">
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ButtonLight>

            <ReactPopUp />
          </LinkLists>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
