import {Link} from 'react-router-dom'

import ThemeContext from '../context/ThemeContext'

import {
  VideosList,
  ThumbnailImage,
  VideoDetailsCard,
  VideoTitle,
  ViewsCount,
  PublishedText,
  CountsCard,
  ProfileContainer,
  ProfileImage,
  DetailContainer,
  ChannelName,
} from './styledComponents'

const NxtVideos = props => {
  const {eachVideo} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isTheme} = value
        return (
          <VideosList>
            <Link to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <DetailContainer>
              <ProfileContainer>
                <ProfileImage
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
              </ProfileContainer>
              <VideoDetailsCard>
                <VideoTitle isTheme={isTheme}>{title}</VideoTitle>
                <ChannelName isTheme={isTheme}> {channel.name} </ChannelName>
                <CountsCard>
                  <ViewsCount isTheme={isTheme}> {viewCount} views</ViewsCount>
                  <PublishedText isTheme={isTheme}>{publishedAt}</PublishedText>
                </CountsCard>
              </VideoDetailsCard>
            </DetailContainer>
          </VideosList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NxtVideos
