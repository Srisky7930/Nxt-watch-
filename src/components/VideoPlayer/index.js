import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import SideBar from '../SideBar'

import ThemeContext from '../context/ThemeContext'
import Navbar from '../Navbar'

import {
  VideoPlayerContainer,
  VideoCard,
  VideoTitle,
  ViewsCounts,
  VideoPlayCard,
  Line,
  ChannelContainer,
  ProfilePicCard,
  ProfilePic,
  Card1,
  Card2,
  ChannelName,
  SubscriberCount,
  Description,
  SavedButton,
  LikeButton,
  DisLikeButton,
  VideoLikeSaveCard,
  ButtonContainer,
  ButtonCard,
  VideoLoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureImageContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPlayer extends Component {
  state = {
    video: {},
    channelListData: {},
    apiStatus: apiStatusConstants.initial,
    activeButton: true,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      console.log(data)
      const videoData = data.video_details
      const fetchedData = {
        channel: videoData.channel,
        description: videoData.description,
        id: videoData.id,
        publishedAt: videoData.published_at,
        thumbnailUrl: videoData.thumbnail_url,
        title: videoData.title,
        videoUrl: videoData.video_url,
        viewCount: videoData.view_count,
      }
      const channelData = {
        name: videoData.channel.name,
        profileImageUrl: videoData.channel.profile_image_url,
        subscriberCount: videoData.channel.subscriber_count,
      }
      this.setState({
        video: fetchedData,
        channelListData: channelData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {video, channelListData, activeButton} = this.state

    const showColor = activeButton ? ' #2563eb' : '#64748b'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isTheme, addSaveItem} = value

          const onClickSave = () => {
            addSaveItem({...video, channelListData})
          }

          const onClickLike = () => {
            this.setState({
              activeButton: false,
            })
          }

          return (
            <>
              <Navbar />
              <VideoPlayerContainer
                isTheme={isTheme}
                data-testid="videoItemDetails"
              >
                <SideBar />
                <VideoPlayCard>
                  <VideoCard>
                    <ReactPlayer
                      url={video.videoUrl}
                      height={500}
                      width={900}
                    />
                  </VideoCard>
                  <VideoTitle isTheme={isTheme}> {video.title} </VideoTitle>
                  <VideoLikeSaveCard>
                    <VideoCard>
                      <ViewsCounts isTheme={isTheme}>
                        {video.viewCount} Views
                      </ViewsCounts>
                      <ViewsCounts isTheme={isTheme}>
                        {video.publishedAt}
                      </ViewsCounts>
                    </VideoCard>
                    <ButtonContainer>
                      <ButtonCard>
                        <LikeButton type="button" onClick={onClickLike}>
                          <BiLike bgColor={showColor} fontSize={30} />
                          Like
                        </LikeButton>
                      </ButtonCard>
                      <ButtonCard>
                        <DisLikeButton>
                          <BiDislike bgColor={showColor} fontSize={30} />
                          DisLike
                        </DisLikeButton>
                      </ButtonCard>
                      <ButtonCard>
                        <SavedButton type="button" onClick={onClickSave}>
                          Save
                        </SavedButton>
                      </ButtonCard>
                    </ButtonContainer>
                  </VideoLikeSaveCard>
                  <Line />
                  <ChannelContainer>
                    <ProfilePicCard>
                      <ProfilePic
                        src={channelListData.profileImageUrl}
                        alt="channel logo"
                      />
                    </ProfilePicCard>

                    <Card2>
                      <ChannelName> {channelListData.name} </ChannelName>
                      <SubscriberCount>
                        {channelListData.subscriberCount} Subscribers
                      </SubscriberCount>
                    </Card2>
                  </ChannelContainer>
                  <Card1>
                    <Description isTheme={isTheme}>
                      {video.description}
                    </Description>
                  </Card1>
                </VideoPlayCard>
              </VideoPlayerContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderInProgress = () => (
    <VideoLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideoLoaderContainer>
  )

  getFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value

        const onClickRetryButton = () => {
          this.getVideoDetails()
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

  renderVideoPlayer = () => {
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
    return <>{this.renderVideoPlayer()}</>
  }
}

export default VideoPlayer
