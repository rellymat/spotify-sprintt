import React, { useState, useEffect, useContext  } from 'react';
import { PlayerContext } from '../player';



const ProgressBar = () => {
    const { isPlaying, track, audio, changeTrack } = useContext(PlayerContext)
    const [currentTime, setCurrentTime] = useState(0)
    const [durationTime, setDurationTime] = useState(0)
    const timer = () => setCurrentTime(audio.currentTime)

    useEffect(
        () => {
            if (songOver()) {
                changeTrack(1)
                return;
            }
            if (track[0].duration !== undefined){
                const id = setInterval(timer, 500)
                setDurationTime(track[0].duration / 1000)
                return () => clearInterval(id)
            }
        },
        [currentTime, isPlaying[0], track[0]]
    )

    const songOver = () => {
       return audio.currentTime >= audio.duration
    }

    const audioToSm = time => {
        const s = parseInt(time % 60);
        const m = parseInt((time / 60) % 60);
        return `${timeDisplay(m)}:${timeDisplay(s)}`
    }

    const timeDisplay = time => {
        if (time > 9)
            return time
        return `0${time}`
    }

    return (
        <div className="rowC progressBar">
            <p className="timer">{audioToSm(currentTime)} </p>
            <progress value={currentTime} max={durationTime} />
            <p className="timer"> {audioToSm(durationTime)} </p>
        </div>
    );
}

export default ProgressBar;