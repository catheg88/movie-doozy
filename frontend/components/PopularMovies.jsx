import React from 'react'
import * as request from 'request-promise'

import MovieTile from './MovieTile'

class PopularMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movies: null }
  }
  
  componentDidMount() {
    fetch('/api/popular/')
      .then( response => {
        return response.json()
      })
      .then ( result => {
        this.setState({ movies: result.results })
      })
  }
  
  render() {
    let movies = []
    if (this.state.movies) {
      movies = this.state.movies.map( (movie, idx) => {
        return (
          <MovieTile
            movie={movie}
            key={idx}
            handleMovieClick={this.props.handleMovieClick}
          />
        )
      })
    }

    return (
      <div className="Popular Movies">
        <h1>Explore Popular Movies</h1>
        <div className="PopularMoviesGrid Grid">{movies}</div>
      </div>
    )
  }
}

export default PopularMovies