import React from 'react'
import { useLocation } from "react-router-dom";
import PlaylistComp from "./playlistComp";

const PlaylistPage = () => {
    const location = useLocation();
    const playlist = location.state
    const playlist_id = playlist.playlist.playlist_id
    const { description, image_url, name } = playlist.playlist

    return (
        <PlaylistComp
            id={playlist_id}
            description={description}
            image={image_url}
            name={name}
            />
    )
}

export default PlaylistPage