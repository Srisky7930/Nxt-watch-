import styled from 'styled-components'

export const VideosList = styled.li`
  list-style-type: none;
  margin-right: 20px;
  height: 280px;
`

export const ThumbnailImage = styled.img`
  height: 120px;
`

export const VideoDetailsCard = styled.div``

export const VideoTitle = styled.p`
  font-size: 12px;
  max-width: 190px;
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
`
export const ViewsCount = styled.p`
  font-size: 10px;
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
`

export const PublishedText = styled.p`
  font-size: 10px;
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
  margin-left: 10px;
`

export const CountsCard = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
  font-size: 14px;
`

export const ProfileContainer = styled.div`
  display: flex;
`
export const ProfileImage = styled.img`
  height: 30px;
  margin-right: 4px;
  margin-top: 10px;
`
export const DetailContainer = styled.div`
  display: flex;
`
export const ChannelName = styled.p`
  font-size: 10px;
  color: ${props => (props.isTheme ? '#181818' : '#f9f9f9')};
`
