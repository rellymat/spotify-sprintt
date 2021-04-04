import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Browse from './components/browse';
import Liked_Songs from './components/liked_songs';
import Home from './components/home';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="rowC">
        <NavBar />
        <Switch>
          <Route path='/browse' component={Browse} />
          <Route path='/liked_songs' component={Liked_Songs} />
          <Route exact path='/' component={Home} />
        </Switch>
        </div>
      </React.Fragment>
    );
  }

}

export default App;
