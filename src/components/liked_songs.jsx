import React, { Component } from 'react';
import { getFeatured } from '../services/playlists';
import FilterBar from './commons/filterBar';
import Header from './commons/header';
import SongsTable from './songsTable';
import { table } from './../services/table';


class Liked_Songs extends Component {
    state = {
        defaultData: table.tracks,
        data: table.tracks,
        featured: {},
        input: ''
    }

    async componentDidMount() {
        try {
            let featured = await getFeatured()

            featured = featured.data.playlists[2]

            this.setState({  featured })

        } catch (error) {
            alert('Something went wrong...')
        }
    }

    updateFilter = input => {
        const data = this.state.defaultData.filter(song => {
            return this.filter(song, input)
        })
        this.setState({ input, data })
    }

    filter = (song, input) => {
        if (song.album_name.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.artists_names.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.name.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.release_date.toLowerCase().includes(input.toLowerCase()))
            return true
    }

    render() {
        const { featured, input, data } = this.state
        return (
            <div className='liked_songs'>
                <Header playlist={featured} number={10} duration={2.4} />
                <FilterBar input={input} onChange={this.updateFilter} />
                <SongsTable table={data} />
            </div>
        );
    }
}

export default Liked_Songs;