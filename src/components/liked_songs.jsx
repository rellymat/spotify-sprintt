import React, { Component } from 'react';
import { getFeatured } from '../services/playlists';
import Header from './commons/header';
import SongsTable from './songsTable';


class Liked_Songs extends Component {
    state = {
        featured: {}
    }

    async componentDidMount() {
        try {
            let featured = await getFeatured()

            featured = featured.data.playlists[2]
            
            this.setState({ featured })

        } catch (error) {
            alert('Something went wrong...')
        }
    }

    render() { 
        const {featured} = this.state
        return (
            <div className='container'>
            <Header playlist={featured} number={10} duration={2.4} />
            <SongsTable />
            </div>
        );
    }
}
 
export default Liked_Songs;