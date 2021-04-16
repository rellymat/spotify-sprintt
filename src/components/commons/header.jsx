import React from 'react';

const Header = ({playlist, number, duration}) => {
    const {description, image_url, name} = playlist.playlist
    const style = {
            backgroundImage: `url(${image_url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='header' style={style}>
            <div className="black-layer"></div>
            <div className="rowC first-line">
                <p className="header-text">{name}</p>
                <p className="header-text">{number} songs</p>
            </div>
            <div className="rowC second-line">
                <p className="description-text">{description}</p>
                <p className="description-text duration">{duration}</p>
            </div>
        </div>
    );
}
 
export default Header;