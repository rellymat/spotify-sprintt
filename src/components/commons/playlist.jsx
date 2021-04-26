import React from 'react';
import pause  from "../../assets/pause_line_icon.png";
import play  from "../../assets/play_line_icon.png";
import { useHistory } from "react-router-dom";


const Playlist = ({ playlist }) => {
    const {description, image_url, name} = playlist
    let history = useHistory();

    const toTable = () => {
        history.push({
            pathname: '/playlist_page',
            state: { playlist }
        });
    }

    const handleButton = () => {
        console.log('Hi');
    }
    
    
    return (
        <div className='contanier playitem'>
            <img src={image_url} className="img_playlist" alt="" />
            <img src={play} className="buttonPlaylist" onClick={handleButton} />
            <p className="name" onClick={ () => toTable() } >{name}</p>
            <p className="description" onClick={ () => toTable() } >{description}</p>
        </div>
    );
}


export default Playlist;