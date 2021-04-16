import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { getPlaylist } from '../services/playlists';
import { getSong } from '../services/song';
import FilterBar from './commons/filterBar';
import Header from './commons/header';
import SongsTable from './songsTable';
import PlaybackBar from './playbackbar';


const PlaylistPage = () => {
    const location = useLocation();
    const [defaultData, setDefaultData] = useState([])
    const [data, setData] = useState([])
    const [duration, setDuration] = useState('')
    const [tracksNumber, setTracksNumber] = useState('')
    const [input, setInput] = useState('')
    const [track, setTrack] = useState({})
    const [isPlay, setIsPlay] = useState(false)
    const playlist = location.state

    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            alert('Something went wrong..')
        }
    }, [])

    async function fetchData() {
        const playlist_id = playlist.playlist.playlist_id
        const { data } = await getPlaylist(playlist_id)
        setDefaultData(data.tracks)
        setData(data.tracks)
        setDuration(data.playlist_duration)
        setTracksNumber(data.playlist_tracks)
        setTrack(data.tracks[0])
        getSong(data.tracks[0].track_id)
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

    const songHandle = song => {
        setTrack(song)
    }

    const playHandle = song => {
        setIsPlay(!isPlay)
        if (song !== track)
            setTrack(song)
    }

    return (
        <div className='liked_songs'>
            <Header playlist={playlist} number={tracksNumber} duration={duration} />
            <FilterBar input={input} onChange={updateFilter} />
            <SongsTable table={data} onSong={songHandle} onButton={playHandle} isPlay={isPlay} track={track} />
            <PlaybackBar song={playlist} track={track} onButtonPlay={playHandle} isPlay={isPlay} />
        </div>
    );
}

export default PlaylistPage;