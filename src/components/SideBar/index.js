import {Link} from 'react-router-dom'

import {
  AiOutlineHome,
  AiFillHome,
  AiFillFire,
  AiOutlineFire,
} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../context/ThemeContext'

import {
  HeaderContainer,
  LinkCard,
  Home,
  ParaText,
  SideBarMainContainer,
  SocialContainer,
  SocialHeading,
  SocialLogoCard,
  SocialImg,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme} = value

      return (
        <SideBarMainContainer isTheme={isTheme}>
          <HeaderContainer isTheme={isTheme}>
            <LinkCard>
              {isTheme ? <AiFillHome /> : <AiOutlineHome color="#ffffff" />}
              <Link to="/">
                <Home isTheme={isTheme}> Home </Home>
              </Link>
            </LinkCard>

            <LinkCard>
              {isTheme ? <AiFillFire /> : <AiOutlineFire color="#ffffff" />}
              <Link to="/trending">
                <Home isTheme={isTheme}> Trending </Home>
              </Link>
            </LinkCard>

            <LinkCard>
              {isTheme ? (
                <SiYoutubegaming />
              ) : (
                <SiYoutubegaming color="#ffffff" />
              )}
              <Link to="/gaming">
                <Home isTheme={isTheme}> Gaming </Home>
              </Link>
            </LinkCard>

            <LinkCard>
              {isTheme ? <AiFillFire /> : <AiOutlineFire color="#ffffff" />}
              <Link to="/saved-videos">
                <Home isTheme={isTheme}> Saved Videos </Home>
              </Link>
            </LinkCard>
          </HeaderContainer>
          <SocialContainer>
            <SocialHeading isTheme={isTheme}> CONTACT US</SocialHeading>
            <SocialLogoCard>
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialLogoCard>
            <ParaText>
              Enjoy! Now to see your channels and recommendations!
            </ParaText>
          </SocialContainer>
        </SideBarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
