import React from 'react';
import PlaybackButtons from './playbackbuttons';
import VolumeBar from './commons/volumeBar';
import * as audio from '../services/audio'

const PlaybackBar = ({ image }) => {

    return (
        <div className="rowC playbackbar">
            <img src={image} alt="" />
            <div className="text_bar">
                <p className="p_title">{audio.getSong().name}</p>
                <p className="p_desc">{audio.getSong().album_name}</p>
            </div>
            <PlaybackButtons />
            <VolumeBar />
        </div>
    );
}

export default PlaybackBar;