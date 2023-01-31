import {AiFillFire} from 'react-icons/ai'

import ThemeContext from '../context/ThemeContext'

import Navbar from '../Navbar'
import SideBar from '../SideBar'

import {
  SavedContainer,
  SavedHeadCard,
  SavedMainHeading,
  SavedItemCard,
  SavedOrderList,
  SavedImageContainer,
  SavedImageCard,
  SavedImage,
  SavedDetailsCard,
  SavedTitle,
  SavedChannelName,
  SavedViewCount,
  SavedPublished,
  SavedViewsCard,
  NoSavedImage,
  NoHeading,
  NoPara,
} from './styledComponents'

const Saved = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isTheme, savedList} = value

      const showVideos = savedList.length === 0
      return (
        <>
          <Navbar />
          <SavedContainer isTheme={isTheme} data-testid="savedVideos">
            <SideBar />
            <SavedItemCard>
              <SavedHeadCard isTheme={isTheme}>
                <AiFillFire color="red" fontSize={30} />
                <SavedMainHeading isTheme={isTheme}>
                  Saved Videos
                </SavedMainHeading>
              </SavedHeadCard>
              <SavedOrderList>
                {showVideos ? (
                  <SavedImageContainer>
                    <NoSavedImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoHeading> No Saved Videos found </NoHeading>
                    <NoPara>
                      You can save your videos while watching them
                    </NoPara>
                  </SavedImageContainer>
                ) : (
                  <SavedImageContainer>
                    {savedList.map(each => (
                      <SavedImageCard key={each.id}>
                        <SavedImage
                          src={each.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <SavedDetailsCard>
                          <SavedTitle isTheme={isTheme}>
                            {each.title}
                          </SavedTitle>
                          <SavedChannelName isTheme={isTheme}>
                            {each.channelListData.name}
                          </SavedChannelName>
                          <SavedViewsCard>
                            <SavedViewCount isTheme={isTheme}>
                              {each.viewCount} views
                            </SavedViewCount>
                            <SavedPublished isTheme={isTheme}>
                              {each.publishedAt}
                            </SavedPublished>
                          </SavedViewsCard>
                        </SavedDetailsCard>
                      </SavedImageCard>
                    ))}
                  </SavedImageContainer>
                )}
              </SavedOrderList>
            </SavedItemCard>
          </SavedContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Saved
