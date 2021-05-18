import React from 'react'
import { useHistory } from "react-router-dom";

const Genre = ({ genre }) => {
    let history = useHistory();
    const toGenrePage = () => {
        history.push({
            pathname: '/genre',
            state: { genre }
        });
    }

    const style = {
        backgroundImage: `url(${genre.image_url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='genre genre_border_radius' style={style} onClick={toGenrePage}>
            <div className="black-layer genre_border_radius"></div>
            <div className="genre_title">{genre.category_name}</div>
        </div>
    )
}

export default Genre
