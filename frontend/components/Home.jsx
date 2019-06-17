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
          searchValue={this.props.searchProps.searchValue}
          handleSearchChange={this.props.searchProps.handleSearchChange}
          searchResults={this.props.searchProps.searchResults}
          storeSearchResults={this.props.searchProps.storeSearchResults}
        />
        <PopularMovies handleMovieClick={this.props.handleMovieClick} />
      </div>
    )
  }
}

export default Home
