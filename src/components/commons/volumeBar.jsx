import React, { useState } from 'react';
import volume from '../../assets/volume.png'


const VolumeBar = () => {
    const [value, setValue] = useState(50)

    const onProgress = e => {
        const x = e.pageX - e.target.offsetLeft
        const clickedValue = x * e.target.max / e.target.offsetWidth
        setValue(clickedValue)
    }


    return (
        <div className="rowC volume">
            <img src={volume} alt="" className='volume_button' />
            <progress value={value} max={100} onClick={onProgress}/>
        </div>
    );
}
 
export default VolumeBar;