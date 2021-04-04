import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

function Title({ title, page, handleClick, length }) {
    const disabledArrowLeft = page === 0 || length < 6 ? ' disabled' : ''
    const disabledArrowRight = page === 1 || length < 6 ? ' disabled' : ''

    return (
        <div className="rowC container_title">
            <p className="title"> {title} </p>
            <div className="arrows" >
                <IoIosArrowForward className={`arrowL${disabledArrowLeft}`} onClick={() => handleClick()} />
                <IoIosArrowForward className={`arrowR${disabledArrowRight}`} onClick={() => handleClick()} />
            </div>
        </div>
    )
}

export default Title;