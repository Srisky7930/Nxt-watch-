import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import NxtVideos from '../NxtVideos'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../context/ThemeContext'

import {
  Container,
  SearchContainer,
  VideosContainer,
  VideosOrderList,
  InputContainer,
  SearchInput,
  UpiContainer,
  UpiHeadingCard,
  UpiLogo,
  UpiPara,
  UpiButton,
  UpiCloseButton,
  SearchButton,
  NoSearchImageContainer,
  NoSearchImage,
  NoSearchHeading,
  NoPara,
  RetryButton,
  HomeLoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureImageContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    search: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideosDetails()
  }

  getHomeVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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
      const videosList = data.videos.map(each => ({
        id: each.id,
        channel: each.channel,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      search: event.target.value,
    })
  }

  renderSuccessView = () => {
    const {videosList, search, showBanner} = this.state
    const showItem = videosList.length !== 0
    console.log(videosList)
    const onClickClose = () => {
      this.setState({
        showBanner: false,
      })
    }
    const onClickSearch = () => {
      this.getHomeVideosDetails()
    }

    const onClickRetryButton = () => {
      this.getHomeVideosDetails()
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value

          return (
            <>
              <Navbar />
              <Container isTheme={isTheme} data-testid="home">
                <SideBar />

                <SearchContainer>
                  {showBanner && (
                    <UpiContainer isTheme={isTheme} data-testid="banner">
                      <UpiHeadingCard>
                        <UpiLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />

                        <UpiPara>
                          Buy Nxt Watch Premium Prepaid plans with UPI
                        </UpiPara>
                        <UpiButton>GET IT NOW</UpiButton>
                      </UpiHeadingCard>
                      <UpiHeadingCard>
                        <UpiCloseButton
                          type="button"
                          onClick={onClickClose}
                          data-testid="close"
                        >
                          <IoClose fontSize={20} />
                        </UpiCloseButton>
                      </UpiHeadingCard>
                    </UpiContainer>
                  )}
                  <InputContainer>
                    <SearchInput
                      value={search}
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      type="button"
                      isTheme={isTheme}
                      onClick={onClickSearch}
                      data-testid="searchButton"
                    >
                      <BiSearch color="blue" />
                    </SearchButton>
                  </InputContainer>

                  <VideosContainer>
                    {showItem ? (
                      <VideosOrderList>
                        {videosList.map(eachItem => (
                          <NxtVideos eachVideo={eachItem} key={eachItem.id} />
                        ))}
                      </VideosOrderList>
                    ) : (
                      <NoSearchImageContainer>
                        <NoSearchImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                          alt="no videos"
                        />
                        <NoSearchHeading>
                          No Search results found
                        </NoSearchHeading>
                        <NoPara>
                          Try different key words or remove search filter
                        </NoPara>
                        <RetryButton type="button" onClick={onClickRetryButton}>
                          Retry
                        </RetryButton>
                      </NoSearchImageContainer>
                    )}
                  </VideosContainer>
                </SearchContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderInProgress = () => (
    <HomeLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </HomeLoaderContainer>
  )

  getFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value

        const onClickRetryButton = () => {
          this.getHomeVideoDetails()
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

  renderHomeData = () => {
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
    return <>{this.renderHomeData()}</>
  }
}

export default Home
