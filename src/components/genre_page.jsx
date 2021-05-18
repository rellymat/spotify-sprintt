import React, { useState, useEffect, useContext } from 'react'
import Header from './commons/header'
import { useLocation } from "react-router-dom";
import { getGenresPlaylist } from '../services/playlists';
import Playlist from './commons/playlist';
import { PlayerContext } from './player';

const GenrePage = () => {
    const { genre } = useLocation().state
    const [playlists, setPlaylists] = useState([])
    const [playlistsArray, setPlaylistsArray] = useState([])
    const [number, setNumber] = useState('')
    const { setPath } = useContext(PlayerContext)

    useEffect(async () => {
        setPath('/genre')
        const { data } = await getGenresPlaylist(genre.category_id)
        setPlaylists(data.playlists)
        setNumber(data.playlists.length)

    }, [])

    useEffect(() => {
        divideToFive()
    }, [playlists])

    const divideToFive = () => {
        const length = playlists.length / 5
        let temp = new Array(Math.ceil(length))
        for (let index = 0; index < playlists.length; index += 5) {
            temp[index / 5] = playlists.slice(index, index + 5)
        }
        setPlaylistsArray(temp);
    }

    return (
        <div className="liked_songs">
            <Header playlist={true} image={genre.image_url} name={genre.category_name} number={number} />
            {playlistsArray.map((array) => {
               return <div className="rowC genre_playlist">
                    {array.map((p, index) => {
                        return <Playlist key={index} playlist={p} />
                    })}
                </div>
            })}    
        </div>

    )
}

export default GenrePage