import React from 'react';
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
    
    return (
        <div className='contanier playitem'>
            <img src={image_url} className="img_playlist" alt="" />
            <p className="name" onClick={ () => toTable() } >{name}</p>
            <p className="description" onClick={ () => toTable() } >{description}</p>
        </div>
    );
}


export default Playlist;