import React from 'react';

const Header = ({playlist, description, image, name, number, duration}) => {
    const style = {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='header' style={style}>
            <div className="black-layer"></div>
            <div className="rowC first-line">
                <p className="header-text">{name}</p>
                <p className="header-text">{number} {playlist ? 'playlist' : 'songs'}</p>
            </div>
            <div className="rowC second-line">
                <p className="description-text">{description}</p>
                <p className="description-text duration">{duration}</p>
            </div>
        </div>
    );
}
 
export default Header;