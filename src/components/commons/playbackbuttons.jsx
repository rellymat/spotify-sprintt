import React from 'react';
import ProgressBar from './progressBar';
import play from '../../assets/controller_icons/Play.svg'
import next from '../../assets/controller_icons/next.svg'
import pause from '../../assets/controller_icons/pause.svg'
import prev from '../../assets/controller_icons/prev.svg'

const PlaybackButtons = ({ onButtonPlay, isPlay, track }) => {

    const playButton = () =>{
        return isPlay ? pause : play
    }
    
    return (
        <div className="playbackbuttons">
            <div className="progress_bar">
                <div className="rowC buttons_bar">
                    <img src={prev} alt="" className='button_bar' />
                    <img src={playButton()} alt="" className='button_bar' onClick={() => onButtonPlay(track)} />
                    <img src={next} alt="" className='button_bar' />
                </div>
                <ProgressBar />
            </div>
        </div>
    );
}

export default PlaybackButtons;