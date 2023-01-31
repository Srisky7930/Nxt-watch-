import React from 'react'

const ThemeContext = React.createContext({
  isTheme: false,
  savedList: [],
  addSaveItem: () => {},
  changeTheme: () => {},
})

export default ThemeContext
