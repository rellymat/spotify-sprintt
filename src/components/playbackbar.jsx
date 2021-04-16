import React from 'react';
import PlaybackButtons from './commons/playbackbuttons';
import VolumeBar from './commons/volumeBar';

const PlaybackBar = ({ song, track, onButtonPlay, isPlay }) => {
    return (
        <div className="rowC playbackbar">
            <img src={song.playlist.image_url} alt="" />
            <div className="text_bar">
                <p className="p_title">{track.name}</p>
                <p className="p_desc">{track.album_name}</p>
            </div>
            <PlaybackButtons onButtonPlay={onButtonPlay} isPlay={isPlay} track={track}/>
            <VolumeBar />
        </div>
    );
}
 
export default PlaybackBar;