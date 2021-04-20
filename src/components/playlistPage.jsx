import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { getPlaylist } from '../services/playlists';
import * as audio from '../services/audio';
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
    const playlist_id = playlist.playlist.playlist_id

    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            alert('Something went wrong..')
        }
    }, [])

    async function fetchData() {
        const { data } = await getPlaylist(playlist_id)
        setDefaultData(data.tracks)
        setData(data.tracks)
        setDuration(data.playlist_duration)
        setTracksNumber(data.playlist_tracks)
        setTrack(data.tracks[0])
        audio.setSong(data.tracks[0].track_id)
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
        if (isPlay) {
            audio.pause()
            setIsPlay(false)
        }
        audio.setSong(song.track_id)
    }

    useEffect(async () => {
         if (isPlay) {
                audio.play()
                try {
                    await audio.addToRecently(playlist_id, track.track_id)
                } catch (error) {
                    alert(error.message)
                }
            } else
                audio.pause()
    }, [track, isPlay])


    const playHandle = song => {

        if (song !== track) {
            audio.pause()
            setIsPlay(true)
            setTrack(song)
            audio.setSong(song.track_id)
        } else
            setIsPlay(!isPlay)
    }


    return (
        <div className='liked_songs'>
            <Header playlist={playlist} number={tracksNumber} duration={duration} />
            <FilterBar input={input} onChange={updateFilter} />
            <SongsTable table={data} onSong={songHandle} onButton={playHandle} isPlay={isPlay} track={track} />
            <PlaybackBar
                song={playlist}
                track={track}
                onButtonPlay={playHandle}
                isPlay={isPlay}
            />
        </div>
    );
}

export default PlaylistPage;