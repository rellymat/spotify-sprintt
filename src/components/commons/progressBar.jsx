import React from 'react';



const ProgressBar = () => {
    return (
        <div className="rowC progressBar">
            <p className="timer">0:00 </p>
            <progress value={70} max={100} />
            <p className="timer"> 0:00</p>
        </div>
    );
}
 
export default ProgressBar;