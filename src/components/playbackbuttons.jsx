import React from 'react';
import * as audio from '../services/audio'
import ProgressBar from './commons/progressBar';
import play from '../assets/controller_icons/Play.svg'
import nextIcon from '../assets/controller_icons/next.svg'
import pause from '../assets/controller_icons/pause.svg'
import prev from '../assets/controller_icons/prev.svg'

const PlaybackButtons = () => {

    const playButton = () => {
        return audio.getIsPlay() ? pause : play
    }

    const onPrevious = () => {
        audio.previousSong()
    }

    const onNext = () => {
        audio.nextSong()
    }

    const onPlay = () => {
        audio.playHandle()
    }

    return (
        <div className="playbackbuttons">
            <div className="progress_bar">
                <div className="rowC buttons_bar">
                    <img src={prev} alt="" className='button_bar' onClick={() => onPrevious()} />
                    <img src={playButton()} alt="" className='button_bar' onClick={() => onPlay()} />
                    <img src={nextIcon} alt="" className='button_bar' onClick={() => onNext()} />
                </div>
                <ProgressBar />
            </div>
        </div>
    );
}

export default PlaybackButtons;