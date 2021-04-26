import React from 'react';
import likedImg from '../assets/liked_songs.jpg'
import PlaylistComp from "./playlistComp";


const LikedSong = () => {
    
    return (
        <PlaylistComp
            id='liked_tracks'
            description=''
            image={likedImg}
            name="Liked Songs"
             />
    )



}

export default LikedSong;
