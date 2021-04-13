import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import FilterBar from './commons/filterBar';
import Header from './commons/header';
import SongsTable from './songsTable';
import { getPlaylist } from '../services/playlists';
import PlaybackBar from './playbackbar';


const PlaylistPage = () => {
    const location = useLocation();
    const [defaultData, setDefaultData] = useState([])
    const [data, setData] = useState([])
    const [duration, setDuration] = useState('')
    const [tracks, setTracks] = useState('')
    const [input, setInput] = useState('')
    const playlist = location.state

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            alert('Something went wrong..')
        }
    }, [])

    async function fetchData() {
        const { data } = await getPlaylist(playlist.playlist.playlist_id)
        setDefaultData(data.tracks)
        setData(data.tracks)
        setDuration(data.playlist_duration)
        setTracks(data.playlist_tracks)
    }

    const updateFilter = input => {
        setInput(input)
        setData(defaultData.filter(song => {
            return filter(song, input)
        }))
    }

    const filter = (song, input) => {
        if (song.album_name.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.artists_names.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.name.toLowerCase().includes(input.toLowerCase()))
            return true
        if (song.release_date.toLowerCase().includes(input.toLowerCase()))
            return true
    }

    return (
        <div className='liked_songs'>
            <Header playlist={playlist} number={tracks} duration={duration} />
            <FilterBar input={input} onChange={updateFilter} />
            <SongsTable table={data} />
            <PlaybackBar song={playlist} />
        </div>
    );
}

export default PlaylistPage;