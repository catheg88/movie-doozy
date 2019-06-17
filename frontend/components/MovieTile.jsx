import React from 'react'

class MovieTile extends React.Component {

  render() {
    const info = this.props.movie
    const imgSrc = 'https://image.tmdb.org/t/p/w185'+ info.poster_path

    return (
      <div className="MovieTile"
        onClick={
          () => { this.props.handleMovieClick(info.id) }
        }
      >  
        <div>{info.poster_path ? <img src={imgSrc}/> : null}</div>
        <div>{info.title} ({info.release_date.slice(0,4)})</div>
      </div>
    )
  }
}

export default MovieTile