import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../player';
import volume_icon from '../../assets/volume.png'


const VolumeBar = () => {
    const { audio } = useContext(PlayerContext)
    const [volume, setVolume] = useState(0.5)

    const onVolume = e => {
        const x = e.pageX - e.target.offsetLeft
        const clickedValue = x * e.target.max / e.target.offsetWidth
        setVolume(clickedValue)
    }

    useEffect(() => {
        if (audio !== '')
            audio.volume = volume
    }, [audio, volume])

    return (
        <div className="rowC volume">
            <img src={volume_icon} alt="" className='volume_button' />
            <progress value={volume} max={1} onClick={(e) => onVolume(e)} />
        </div>
    );
}

export default VolumeBar;