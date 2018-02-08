import React, { Component } from 'react'
import './App.css'

import SearchBar from './Containers/searchBar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    )
  }
}

export default App
