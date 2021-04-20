import React, { useState, useEffect } from 'react';
import * as audio from '../../services/audio';



const ProgressBar = () => {
    const [currentTime, setCurrentTime] = useState(audio.getCurrentTime() % 60)
    const duration = audio.duration() % 60
    const timer = () => setCurrentTime(audio.getCurrentTime() % 60)

    useEffect(
        () => {
            if (currentTime >= duration) {
                return;
            }
            const id = setInterval(timer, 1000)
            return () => clearInterval(id)
        },
        [currentTime]
    )

    const audioToSm = time => {
        const s = parseInt(time % 60);
        const m = parseInt((time / 60) % 60);
        return `${m}:${s}`
    }

    return (
        <div className="rowC progressBar">
            <p className="timer">{audioToSm(currentTime)} </p>
            <progress value={currentTime} max={duration} />
            <p className="timer"> {audioToSm(duration)} </p>
        </div>
    );
}
 
export default ProgressBar;