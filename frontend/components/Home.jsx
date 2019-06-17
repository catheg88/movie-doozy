import React from 'react'

import PopularMovies from './PopularMovies'
import Search from './Search'

const img_base_url = "http://image.tmdb.org/t/p/"

class Home extends React.Component {
  render() {    
    return (
      <div className="Home">
        <Search
          handleMovieClick={this.props.handleMovieClick}
          searchValue={this.props.searchValue}
          handleSearchChange={this.props.handleSearchChange}
          searchResults={this.props.searchResults}
          storeSearchResults={this.props.storeSearchResults}
        />
        <PopularMovies handleMovieClick={this.props.handleMovieClick} />
      </div>
    )
  }
}

export default Home
