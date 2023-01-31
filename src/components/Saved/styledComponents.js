import styled from 'styled-components'

export const SavedContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const SavedHeadCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.isTheme ? ' #ebebeb' : ' #313131')};
  }
`
export const SavedItemCard = styled.div``

export const SavedMainHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
  margin-right: 250px;
`

export const SavedOrderList = styled.ul``

export const SavedDetailsCard = styled.div``

export const SavedImage = styled.img`
  height: 300px;
`

export const SavedImageCard = styled.div`
  display: flex;
`

export const SavedImageContainer = styled.div``

export const SavedTitle = styled.p`
  font-size: 30px;
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const SavedChannelName = styled.p`
  font-size: 14px;
  font-family: 'roboto';
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const SavedPublished = styled.p`
  font-size: 14px;
  font-family: 'roboto';
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const SavedViewCount = styled.p`
  font-size: 14px;
  font-family: 'roboto';
  color: ${props => (props.isTheme ? '#0f0f0f' : '#ffffff')};
`

export const SavedViewsCard = styled.div`
  display: flex;
`

export const NoSavedImage = styled.img`
  height: 300px;
`
export const NoHeading = styled.h1``

export const NoPara = styled.p``
