import React, { useContext } from 'react';
import { PlayerContext } from './player';
import PlaybackButtons from './playbackbuttons';
import VolumeBar from './commons/volumeBar';

const PlaybackBar = () => {
    const { track, image } = useContext(PlayerContext)
    return (
        <div className="rowC playbackbar">
            {image === '' ? <div style={{width: '100px'}}/> : <img src={image} alt="" /> } 
            <div className="text_bar">
                <p className="p_title">{track[0].name}</p>
                <p className="p_desc">{track[0].album_name}</p>
            </div>
            <PlaybackButtons />
            <VolumeBar />
        </div>
    );
}

export default PlaybackBar;