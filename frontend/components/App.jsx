import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import MoviePage from './MoviePage'

class App extends React.Component {
  constructor(props){
    super(props)
    this.setRedirect = this.setRedirect.bind(this)
    this.clearRedirect = this.clearRedirect.bind(this)
    
    this.state = {
      movie: null,
      redirect: false,
      searchValue: "",
      searchResults: null
    }
  }

  setRedirect(path) {
    this.setState({ redirect: path })
  }
  
  clearRedirect() {
    this.setState({ redirect: false })
  }
    
  handleMovieClick(id) {
    this.setState({
      movie: id,
      redirect: '/movie/' + id
    })
  }
  
  handleSearchChange(e) {
    this.setState({ searchValue: e})
  }
  
  storeSearchResults(results) {
    this.setState({ searchResults: results })
  }
  
  render(){
    const redirect = this.state.redirect
    
    return (
      <div>
        { redirect ? <Redirect to={redirect} /> : null }
        <Route path="/" exact
          render={ routeProps => (
            <Home
              {...routeProps} 
              handleMovieClick={this.handleMovieClick.bind(this)}
              searchValue={this.state.searchValue}
              handleSearchChange={this.handleSearchChange.bind(this)}
              searchResults={this.state.searchResults}
              storeSearchResults={this.storeSearchResults.bind(this)}
            />
          )}
        />  
        <Route path="/movie"
          render={ routeProps => (
            <MoviePage
              {...routeProps}
              movieId={this.state.movie}
              clearRedirect={this.clearRedirect}
              setRedirect={this.setRedirect}
            />
          )}
        />
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
