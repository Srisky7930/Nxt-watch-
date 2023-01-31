import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.isTheme ? '#f9f9f9' : '#181818')};
  display: flex;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideosContainer = styled.div`
  padding-left: 20px;
`

export const VideosOrderList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const InputContainer = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  background-color: transparent;
  border: 1px solid #d7dfe9;
  padding: 10px;
  height: 40px;
  width: 350px;
  margin-bottom: 20px;
  color: #ffffff;
`

export const UpiContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  height: 250px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const UpiHeadingCard = styled.div`
  padding: 30px;
`

export const UpiLogo = styled.img`
  height: 40px;
`

export const UpiPara = styled.p``

export const UpiButton = styled.button`
  border: 1px solid #181818;
  background-color: transparent;
  padding: 10px;
  margin-top: 20px;
`
export const UpiCloseButton = styled.button`
  border: 1px solid #181818;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  border-width: 0px;
`

export const SearchButton = styled.button`
  padding: 11px;
  border: 1px solid #d7dfe9;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 20px;
`
export const NoSearchImageContainer = styled.div`
  width: 78vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchImage = styled.img`
  height: 200px;
`

export const NoSearchHeading = styled.h1`
  color: #000000;
  font-size: 30px;
  font-family: 'Roboto';
`

export const NoPara = styled.p`
  color: #000000;
  font-size: 20px;
  font-family: 'Roboto';
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
export const HomeLoaderContainer = styled.div`
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
