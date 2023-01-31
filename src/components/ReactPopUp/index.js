import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {
  PopContainer,
  ButtonLogout,
  ConfirmContainer,
  ButtonConfirm,
  Para,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

const ReactPopUp = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value

        return (
          <PopContainer isTheme={isTheme}>
            <Popup
              modal
              trigger={<ButtonLogout type="button">Logout</ButtonLogout>}
            >
              {close => (
                <>
                  <ConfirmContainer>
                    <Para>Are you sure, you want to logout</Para>
                    <ButtonLogout type="button" onClick={() => close()}>
                      Cancel
                    </ButtonLogout>
                    <ButtonConfirm
                      type="button"
                      className="trigger-button"
                      onClick={onClickLogoutButton}
                    >
                      Confirm
                    </ButtonConfirm>
                  </ConfirmContainer>
                </>
              )}
            </Popup>
          </PopContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(ReactPopUp)
