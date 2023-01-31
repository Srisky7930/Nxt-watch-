import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
`
export const VideoLikeSaveCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const VideoCard = styled.div`
  display: flex;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
`

export const VideoPlayCard = styled.div`
  padding-top: 50px;
  padding-left: 50px;
`

export const ViewsCounts = styled.p`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-left: 10px;
`

export const Line = styled.hr``

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfilePicCard = styled.div``
export const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
`

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Card1 = styled.div`
  margin-left: 40px;
`

export const ChannelName = styled.p`
  color: #7e858e;
  font-size: 10px;
`
export const SubscriberCount = styled.p`
  color: #7e858e;
  font-size: 10px;
`

export const Description = styled.p`
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
`
export const SavedButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  border-width: 0px;
  cursor: pointer;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const DisLikeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonCard = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: 'Roboto';
  margin-right: 20px;
`

export const VideoLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const FailureContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
`
export const FailureImage = styled.img`
  height: 100px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isTheme ? '#000000' : '#ffffff')};
`

export const FailurePara = styled.p`
  color: ${props => (props.isTheme ? '##000000' : '#ffffff')};
`

export const FailureImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`

export const RetryButton = styled.button`
  background-color: Blue;
  color: #ffffff;
  cursor: pointer;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  border-width: 0px;
  border-radius: 8px;
  margin-bottom: 30px;
`
