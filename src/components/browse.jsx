import React, { useEffect, useState } from 'react';
import { getGenres } from '../services/playlists';
import Genre from './genre';

const Browse = () => {
    const [genres, setGenres] = useState([])

    useEffect(async () => {
        const data = await fetchData()
        setGenres(data.categories)
    }, [])

    const fetchData = async () => {
        const { data } = await getGenres()
        return data
    }

    return (
        <div className='genre_page'>
            <div className="genre_container">
                <h1 className="genre_headline">Genres</h1>
                <div className='rowC genre_list'>
                    {genres.map((g, index) => {
                        return <Genre genre={g} key={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Browse;