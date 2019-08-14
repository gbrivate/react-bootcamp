import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './home.css'
import AlbumList from '../albums/AlbumList'
import NoMatch from '../NoMatch'
import AlbumDetail from '../albums/detail/AlbumDetail'

class Home extends React.PureComponent {
  render() {
    return (
      <div id="home">
        <h1>Welcome to the React Bootcamp!</h1>
        <h2>This is our photo viewer application!</h2>
        <hr></hr>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AlbumList} />
            <Route exact path="/album/:id" component={AlbumDetail} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home
