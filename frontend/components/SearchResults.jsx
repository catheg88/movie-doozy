import React from 'react'

import MovieTile from './MovieTile'

class SearchResults extends React.Component {
  render() {
    let movies = []
    if (this.props.movies) {
      movies = this.props.movies.map( (movie, idx) => {
        return (
          <MovieTile
            movie={movie}
            key={idx}
            handleMovieClick={
              this.props.handleMovieClick
            }
          />
        )
      })
    }
    return (
      <div>
        <h1>SearchResults</h1>
        <div className="SearchResultsGrid Grid">{movies}</div>
      </div>
    )
  }
}

export default SearchResults