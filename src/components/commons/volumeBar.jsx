import React, { useState, useEffect } from 'react';
import volume_icon from '../../assets/volume.png'
import * as audio from '../../services/audio';


const VolumeBar = () => {
    const [volume, setVolume] = useState(audio.getVolume())

    const onVolume = e => {
        const x = e.pageX - e.target.offsetLeft
        const clickedValue = x * e.target.max / e.target.offsetWidth
        setVolume(clickedValue)
    }

    useEffect(() => {
        audio.setVolume(volume)
    }, [volume])

    console.log(volume);


    return (
        <div className="rowC volume">
            <img src={volume_icon} alt="" className='volume_button' />
            <progress value={volume} max={1} onClick={(e) => onVolume(e)} />
        </div>
    );
}

export default VolumeBar;