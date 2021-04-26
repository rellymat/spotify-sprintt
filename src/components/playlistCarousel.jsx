import React, { useState, useEffect } from 'react';
import Title from './commons/title';
import Playlist from './commons/playlist';

function PlaylistCarousel({ title, playlists }) {
    const [page, setPage] = useState(0)
    const [currectFive, setFive] = useState(playlists.slice(0, 5))
    const length = playlists.length
    
    useEffect(() => {
        const currectPage = page * 5
        setFive(playlists.slice(currectPage , currectPage + 5))
    },[page, playlists])

    function onArrowClick() {
        if (page === 0)
            setPage(1)
        else
            setPage(0)
    }


    return (
        <div className="container carousel">
            <Title title={title} page={page} handleClick={onArrowClick} length={length} />
            <div className="rowC playlist">
                {currectFive.length > 0 && currectFive.map((playlist, index) => {
                    return <Playlist key={index} playlist={playlist} />
                })}
            </div>
        </div>
    )
}

export default PlaylistCarousel;