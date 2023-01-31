import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingHeadCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  }
`

export const TrendingHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const TrendingDetailContainer = styled.div``

export const TrendingImageContainer = styled.li`
  display: flex;
`

export const TrendingImageCard = styled.div``

export const TrendingImage = styled.img`
  height: 250px;
  width: 450px;
  margin-bottom: 10px;
`

export const ImageDetails = styled.div`
  margin-left: 20px;
`

export const PublishedAt = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const TrendingViews = styled.p`
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const TrendingCard = styled.div`
  display: flex;
`

export const TrendingPublished = styled.p`
  margin-left: 10px;
  font-size: 14px;
  color: #7e858e;
  font-family: 'Roboto';
`
export const SideBarContainer = styled.div`
  color: red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const TrendingOrderList = styled.ul``
export const TrendingItemsCard = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`

export const TrendingLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
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

export const FailureContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#ffffff' : '#181818')};
`
export const FailureImage = styled.img`
  height: 100px;
`

export const FailureHeading = styled.p`
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
