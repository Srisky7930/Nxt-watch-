import {ImageEl, DivEl, Header, Para, NotFoundCard} from './styledComponents'

import Navbar from '../Navbar'
import SideBar from '../SideBar'

import ThemeContext from '../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme} = value
      const bgColor = isTheme ? '#ffffff' : '#000000'
      const color = isTheme ? '#000000' : '#ffffff'
      return (
        <>
          <Navbar />
          <DivEl bgColor={bgColor} color={color}>
            <SideBar />
            <NotFoundCard>
              {isTheme ? (
                <>
                  <ImageEl
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                </>
              ) : (
                <>
                  <ImageEl
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                    alt="not found"
                  />
                </>
              )}
              <Header>Page Not Found</Header>
              <Para>
                we are sorry, the page you requested could not be found.
              </Para>
            </NotFoundCard>
          </DivEl>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
