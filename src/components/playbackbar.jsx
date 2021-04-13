import React from 'react';
import PlaybackButtons from './commons/playbackbuttons';
import VolumeBar from './commons/volumeBar';

const PlaybackBar = ({song}) => {
    return (
        <div className="rowC playbackbar">
            <img src={song.playlist.image_url} alt="" />
            <div className="text_bar">
                <p className="p_title">{song.playlist.name}</p>
                <p className="p_desc">{song.playlist.description}</p>
            </div>
            <PlaybackButtons />
            <VolumeBar />
        </div>
    );
}
 
export default PlaybackBar;