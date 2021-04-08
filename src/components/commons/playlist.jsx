import React from 'react';


const Playlist = ({ playlist }) => {
    const {description, image_url, name} = playlist
    
    return (
        <div className='contanier playitem'>
            <img src={image_url} className="img_playlist" alt="" />
            <p className="name" >{name}</p>
            <p className="description" >{description}</p>
        </div>
    );
}


export default Playlist;