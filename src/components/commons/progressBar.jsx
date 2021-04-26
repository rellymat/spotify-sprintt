import React, { useState, useEffect } from 'react';
import * as audio from '../../services/audio';



const ProgressBar = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const [durationTime, setDurationTime] = useState(audio.getSong().duration / 1000)
    const timer = () => setCurrentTime(audio.getCurrentTime())

    useEffect(
        () => {
            if (audio.isFinish()) {
                audio.songDone()
                audio.resetAudio()
                return;
            }
            const id = setInterval(timer, 500)
            setDurationTime(audio.getSong().duration / 1000)
            return () => clearInterval(id)
        },
        [currentTime, audio.getIsPlay(), audio.getSong()]
    )

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