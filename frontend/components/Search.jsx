import React from 'react'

import SearchResults from './SearchResults'

class Search extends React.Component {
  
  handleSearchChange(e) {
    clearTimeout(this.timer)    
    this.props.handleSearchChange(e.target.value)
    this.timer = setTimeout( () => {
      fetch('/api/search/' + this.props.searchValue)
        .then( response => {
          return response.json()
        }).then ( result => {
          this.props.storeSearchResults(result.results)
        })
    }, 1500 )
  }
  
  render() {
    return (
      <div>
        <p>Browse and search movies with Movie Doozy, powered by <a href="https://www.themoviedb.org/">The Movie Database</a></p>
          <input 
            type="text" 
            value={this.props.searchValue}
            onChange={this.handleSearchChange.bind(this)}
          />
          <div>Search</div>
        {
          (this.props.searchValue !== "") ? 
            <SearchResults
              movies={this.props.searchResults}
              handleMovieClick={this.props.handleMovieClick}
            /> :
            null
        }
      </div>
    )
  }
}

export default Search
