import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoPlayer from './components/VideoPlayer'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './components/context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isTheme: true,
    savedList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isTheme: !prevState.isTheme,
    }))
  }

  addSaveItem = video => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, video],
    }))
  }

  render() {
    const {isTheme, savedList} = this.state
    return (
      <>
        <ThemeContext.Provider
          value={{
            isTheme,
            savedList,
            changeTheme: this.changeTheme,
            addSaveItem: this.addSaveItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/saved-videos" component={Saved} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
