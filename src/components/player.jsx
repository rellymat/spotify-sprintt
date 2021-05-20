import React, { useState, useEffect, createContext } from 'react'
import {  getPlaylist, addToRecently } from "../services/playlists";

export const PlayerContext = createContext()
const token = '04f035ea-172d-4a93-82bf-3841d116e387'
        
const getEncryptedToken = (token) => {
    let date = new Date()
    let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
    let stringToEncrypt = `${token}===${utcTime}`
    return btoa(stringToEncrypt)
}

const newToken = getEncryptedToken(token)

export const PlayerProvider = props => {
    const [track, setTrack] = useState('')
    const [path, setPath] = useState(window.location.pathname)
    const [audio, setAudio] = useState('')
    const [image, setImage] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)
    const [playlist, setPlaylist] = useState([])
    const [playlist_id, setPlaylist_id] = useState('')

    useEffect(() => {
        if(audio !== ''){
            if (isPlaying)
                audio.play()
            else
                audio.pause()
        }
    }, [isPlaying, audio])

    const isAudioPlay = () => {
        return isPlaying === true && audio !== ''
    }

    const changeTrack = index => {
        const trackIndex = playlist.indexOf(track)
        if (trackIndex === -1)
            return

        if (isPlaying === true){
            audio.pause()
        }
        
        setIsPlaying(true)

        if (index > 0)
            nextTrack(trackIndex + 1)
        else
            prevTrack(trackIndex - 1)
    }

    const nextTrack = trackIndex => {
        if (trackIndex !== playlist.length)
            setSong(playlist[trackIndex])
            else{
                setIsPlaying(false)
                audio.currentTime = 0
            }
    }

    const prevTrack = trackIndex => {
        if (trackIndex !== - 1)
            setSong(playlist[trackIndex])
        else{
            setIsPlaying(false)
            audio.currentTime = 0
        }
    }

    const setSong = song => {
        const trackAPI = `http://api.sprintt.co/spotify/play/${song.track_id}?access=${newToken}`
        setTrack(song)
        setAudio(new Audio(trackAPI))
        setIsPlaying(true)
    }

    const setNewSong = (playlist, song) => {
        if (isAudioPlay())
            audio.pause()

        setPlaylist(playlist)
        setSong(song)
    }

    const putPlaylist = async playlist => {
        const { tracks } = await getPlaylist(playlist.playlist_id)
        setPlaylist_id(playlist.playlist_id)
        setNewSong(tracks, tracks[0])
        await addToRecently(playlist.playlist_id, tracks[0].track_id)
    }

    return (
        <PlayerContext.Provider
            value={{
                track: [track, setTrack],
                path,
                setPath,
                image,
                setImage,
                audio,
                isPlaying: [isPlaying, setIsPlaying],
                changeTrack,
                setNewSong,
                putPlaylist,
                playlist_id
            }}
        >
            {props.children}
        </PlayerContext.Provider>
    )
}