import React, { useEffect, useState } from 'react';
import { likeTrack, getPlaylist, addToRecently } from "../services/playlists";
import FilterBar from './commons/filterBar';
import Header from './commons/header';
import SongsTable from './songsTable';


const PlaylistComp = ({ id, description, image, name }) => {
    const [defaultData, setDefaultData] = useState([])
    const [data, setData] = useState([])
    const [duration, setDuration] = useState('')
    const [tracksNumber, setTracksNumber] = useState('')
    const [input, setInput] = useState('')
    const [flag, setFlag] = useState(true)

    useEffect(() => {
    }, [flag])

    const handleLike = async track => {
        const isLiked = track.is_liked === 0
        track.is_liked = isLiked ? 1 : 0
        try {
            await likeTrack(track.track_id, isLiked)
            setFlag(!flag)
            if (id === 'liked_tracks') {
                const newData = data.filter(d => {
                    return d !== track
                })
                setData(newData)
                setDefaultData(newData)
                setTracksNumber(newData.length)
            }
        } catch (error) {
        }
    }

    useEffect(async () => {
        try {
            const { tracks, playlist_duration } = await fetchData()
            setDefaultData(tracks)
            setData(tracks)
            setDuration(playlist_duration)
            setTracksNumber(tracks.length)
        } catch (error) {
            alert('Something went wrong..')
        }
    }, [])

    async function fetchData() {
        return await getPlaylist(id)
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

    const setToRecently = async track_id => {
        if (id !== 'liked_tracks') {
            try {
                await addToRecently(id, track_id)
            } catch (error) {
                alert(error.message)
            }
        }
    }

    return (
        <div className='liked_songs'>
            <Header
                description={description}
                image={image}
                name={name}
                number={tracksNumber}
                duration={duration} />
            <FilterBar input={input} onChange={updateFilter} />
            <SongsTable
                image={image}
                table={data}
                onLike={handleLike}
                setToRecently={setToRecently} />
        </div>
    );
}

export default PlaylistComp;