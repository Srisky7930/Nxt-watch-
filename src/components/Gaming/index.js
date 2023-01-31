import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../context/ThemeContext'

import {
  GamingContainer,
  GamingCard,
  GamingHeadingCard,
  GamingHeading,
  GamingImageContainer,
  GamingImage,
  GamingDetailContainer,
  GamingOrderList,
  SideBarContainer,
  GamingTitle,
  GamingView,
  GamingLoaderContainer,
  FailureContainer,
  FailureImageContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const gamingData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingList: gamingData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {gamingList} = this.state
    console.log(gamingList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value
          return (
            <>
              <Navbar />
              <GamingContainer isTheme={isTheme} data-testid="gaming">
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                <GamingDetailContainer>
                  <GamingHeadingCard isTheme={isTheme}>
                    <SiYoutubegaming fontSize={30} color="red" />
                    <GamingHeading isTheme={isTheme}> Gaming</GamingHeading>
                  </GamingHeadingCard>
                  <GamingCard isTheme={isTheme}>
                    <GamingOrderList isTheme={isTheme}>
                      {gamingList.map(each => (
                        <GamingImageContainer isTheme={isTheme} key={each.id}>
                          <Link to={`/videos/${each.id}`}>
                            <GamingImage
                              src={each.thumbnailUrl}
                              alt="video thumbnail"
                            />
                          </Link>
                          <GamingTitle isTheme={isTheme}>
                            {each.title}
                          </GamingTitle>
                          <GamingView>
                            {each.viewCount} Watching Worldwide{' '}
                          </GamingView>
                        </GamingImageContainer>
                      ))}
                    </GamingOrderList>
                  </GamingCard>
                </GamingDetailContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderInProgress = () => (
    <GamingLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </GamingLoaderContainer>
  )

  getFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value

        const onClickRetryButton = () => {
          this.getGameData()
        }

        return (
          <>
            <Navbar />
            <FailureContainer isTheme={isTheme}>
              <SideBar />
              <FailureImageContainer>
                {isTheme ? (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                    alt="failure view"
                  />
                ) : (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    alt="failure view"
                  />
                )}
                <FailureHeading isTheme={isTheme}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailurePara isTheme={isTheme}>
                  We are having some trouble to complete your request.
                </FailurePara>
                <FailurePara isTheme={isTheme}>Please try again.</FailurePara>
                <RetryButton type="button" onClick={onClickRetryButton}>
                  Retry
                </RetryButton>
              </FailureImageContainer>
            </FailureContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderInProgress()
      case apiStatusConstants.failure:
        return this.getFailureView()

      default:
        return null
    }
  }

  render() {
    return <>{this.renderGamingData()}</>
  }
}

export default Gaming
