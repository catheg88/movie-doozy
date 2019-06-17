import React from 'react'

class MoviePage extends React.Component {
  constructor(props) {
    super(props)
    this.props.history.push('/')
    this.props.history.push(this.props.match.url + '/' + this.props.movieId)
    this.state = { movieInfo: null }
  }
  
  componentDidMount() {
    this.props.clearRedirect()
    
    if (!this.props.movieId) {
      console.log(this.props.history.location)
    }
    
    fetch('/api/movie/' + this.props.movieId)
      .then( response => {
        return response.json()
      })
      .then ( result => {
        this.setState({ movieInfo: result })
      })
      
  }
  
  render() {
    const info = this.state.movieInfo
    var genreList, imgSrc, releaseDate, cast = null
    
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    
    if (info) {
      genreList = info.genres
        .map( genre => genre.name )
        .join(', ')
        
      imgSrc = 'https://image.tmdb.org/t/p/w500'+ info.poster_path
      
      let yr = info.release_date.slice(0, 4)
      let mo = months[info.release_date.slice(5, 7) - 1]
      let day = info.release_date.slice(8, 10)      
      if (day[0] === '0') {
        day = day[1]
      }
      releaseDate = day + ' ' + mo + ' ' + yr
      
      cast = info.credits.cast
                 .slice(0, 3)
                 .map( actor => actor.name )
                 .join(", ") + '...'
    }
    
    return (
      <div className="MoviePage">
        { info ? 

            <div className="MoviePageContainer">
              {info.poster_path ? 
                <div className="PageImgCont">
                  <img src={imgSrc}/>
                </div> :
                null
              }
              <div className="PageInfoCont">
                <h1>{info.title}</h1>
                <p>{info.tagline}</p>
                <p>Release Date: {releaseDate}</p>
                <p>Runtime: {info.runtime} min</p>
                <p>Genres: {genreList}</p>
                <p>Cast: {cast}</p>
                <p>{info.overview}</p>
                <div
                  className="GoBack"
                  onClick={ () => this.props.setRedirect('/')}
                >Go back</div>
              </div>
            </div>            
          :
            null
        }
      </div>
    )
  }
  
}

export default MoviePage