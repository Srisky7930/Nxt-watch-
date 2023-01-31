import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import Navbar from '../Navbar'
import ThemeContext from '../context/ThemeContext'

import {
  TrendingContainer,
  TrendingHeadCard,
  TrendingHeading,
  TrendingDetailContainer,
  TrendingImageContainer,
  TrendingImageCard,
  TrendingImage,
  ImageDetails,
  PublishedAt,
  ChannelName,
  TrendingViews,
  TrendingPublished,
  TrendingCard,
  SideBarContainer,
  TrendingOrderList,
  TrendingItemsCard,
  TrendingLoaderContainer,
  FailureContainer,
  FailureImageContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
  RetryButton,
} from './styledComponents'

import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getTrendingDetails()
  }

  getTrendingDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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

      const trendingData = data.videos.map(each => ({
        channel: each.channel,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingList: trendingData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme} = value
          return (
            <>
              <Navbar />
              <TrendingContainer isTheme={isTheme} data-testid="trending">
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>

                <TrendingDetailContainer>
                  <TrendingHeadCard isTheme={isTheme}>
                    <HiFire color="red" fontSize={40} />
                    <TrendingHeading isTheme={isTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeadCard>
                  <TrendingItemsCard>
                    <TrendingOrderList>
                      {trendingList.map(each => (
                        <TrendingImageContainer key={each.id}>
                          <TrendingImageCard>
                            <Link to={`/videos/${each.id}`}>
                              <TrendingImage
                                src={each.thumbnailUrl}
                                alt="video thumbnail"
                              />
                            </Link>
                          </TrendingImageCard>
                          <ImageDetails>
                            <PublishedAt isTheme={isTheme}>
                              {each.title}
                            </PublishedAt>
                            <ChannelName isTheme={isTheme}>
                              {each.channel.name}
                            </ChannelName>
                            <TrendingCard>
                              <TrendingViews>
                                {each.viewCount} views
                              </TrendingViews>
                              <TrendingPublished>
                                {each.publishedAt}
                              </TrendingPublished>
                            </TrendingCard>
                          </ImageDetails>
                        </TrendingImageContainer>
                      ))}
                    </TrendingOrderList>
                  </TrendingItemsCard>
                </TrendingDetailContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderInProgress = () => (
    <TrendingLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </TrendingLoaderContainer>
  )

  getFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value

        const onClickRetryButton = () => {
          this.getTrendingDetails()
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

  renderTrendingData = () => {
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
    return <>{this.renderTrendingData()}</>
  }
}

export default Trending
