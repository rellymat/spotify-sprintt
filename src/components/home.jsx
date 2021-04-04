import React, { Component } from 'react';
import PlaylistCarousel from './playlistCarousel';
import { getRecently , getFeatured, getMood} from '../services/playlists'


class Home extends Component {
    state ={
        recently: [],
        featured: [],
        mood: []
    }

    async componentDidMount() {
        let recently = await getRecently()
        let featured = await getFeatured()
        let mood = await getMood()
        
        recently = recently.data.playlists
        featured = featured.data.playlists
        mood = mood.data.playlists

        this.setState({recently, featured, mood })
    }

    render() {
        return (
            <div className="home">
                <PlaylistCarousel title='Recently Played' playlists={this.state.recently} />
                <PlaylistCarousel title='Featured Playlists' playlists={this.state.featured} />
                <PlaylistCarousel title='Mood' playlists={this.state.mood} />
            </div>
        );
    }
}

export default Home;