import React, { useContext } from 'react';
import { PlayerContext } from '../player';
import pause  from "../../assets/pause_line_icon.png";
import play  from "../../assets/play_line_icon.png";
import { useHistory } from "react-router-dom";


const Playlist = ({ playlist }) => {
    const { putPlaylist, playlist_id, isPlaying, setImage } = useContext(PlayerContext)
    const {description, image_url, name} = playlist
    let history = useHistory();

    const toTable = () => {
        history.push({
            pathname: '/playlist_page',
            state: { playlist }
        });
    }

    const buttonClass = () => {
        if (isPlaying[0] && playlist_id === playlist.playlist_id)
            return pause
        return play
    }

    const handleButton = () => {
        if (playlist_id === playlist.playlist_id)
            isPlaying[1](!isPlaying[0])
        else{
            putPlaylist(playlist)
            setImage(image_url)
        }
    }
    
    
    return (
        <div className='playitem'>
            <img src={image_url} className="img_playlist" alt="" />
            <img src={buttonClass()} className="buttonPlaylist" onClick={handleButton} />
            <p className="name" onClick={ () => toTable() } >{name}</p>
            <p className="description" onClick={ () => toTable() } >{description}</p>
        </div>
    );
}


export default Playlist;