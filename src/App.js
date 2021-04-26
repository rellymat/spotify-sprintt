import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Browse from './components/browse';
import Liked_Songs from './components/liked_songs';
import Home from './components/home';
import PlaylistPage from './components/playlistPage';
import PlaybackBar from './components/playbackbar';
import * as audio from './services/audio';
import './App.css';

class App extends Component {
  state = {
    playlist_id: '',
    image: '',
    track: {},
    playlist: [],
    isPlay: false
  }

  setPlatlist = () =>{
    
  }

  setCurrentSong = index => {
    const { playlist } = this.state
    audio.pause()
    this.setState({ track: playlist[index] })
    audio.setSong(playlist[index].track_id)
  }

  songDone = () => {
    const { playlist, track } = this.state
    const trackIndex = playlist.indexOf(track)
    if (trackIndex !== this.state.playlist.length - 1) {
      this.setCurrentSong(trackIndex + 1)
    } else {
      this.setState({ isPlay: false })
    }
  }

  previousSong = () => {
    const { playlist, track } = this.state
    const trackIndex = playlist.indexOf(track)
    if (trackIndex !== 0)
      this.setCurrentSong(trackIndex - 1)
    else
      this.setCurrentSong(playlist.length - 1)
  }

  nextSong = () => {
    const { playlist, track } = this.state
    const trackIndex = playlist.indexOf(track)
    if (trackIndex !== playlist.length - 1)
      this.setCurrentSong(trackIndex + 1)
    else
      this.setCurrentSong(0)
  }

  playHandle = song => {
    const { track, isPlay } = this.state
    if (song !== track) {
      audio.pause()
      this.setState({
        isPlay: true,
        track: song
      })
      audio.setSong(song.track_id)
    } else
      this.setState({ isPlay: !isPlay })
  }

  render() {
    const { image, isPlay, track } = this.state
    return (
      <React.Fragment>
        <div className="rowC">
          <NavBar />
          <Switch>
            <Route path='/browse' component={Browse} />
            <Route path='/liked_songs' component={Liked_Songs} />
            <Route path='/playlist_page' component={PlaylistPage} />
            <Route exact path='/' component={() => <Home />} />
          </Switch>
        </div>
        <PlaybackBar image={image} />
      </React.Fragment>
    );
  }

}

export default App;
