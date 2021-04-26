import React from 'react';
import not_liked from '../assets/not_liked.png'
import liked from '../assets/liked.png'
import play_icon from '../assets/play_line_icon.png'
import pause_icon from '../assets/pause_line_icon.png'
import * as audio from '../services/audio'


const SongsTable = ({ table, onLike }) => {
    const tracks = table
    
    const createButton = song => {
        if (song === audio.getSong())
            return audio.getIsPlay() ? pause_icon : play_icon
        return play_icon
    }

    const isLiked = track => {
        if (track.is_liked === 0)
            return not_liked
        return liked
    }

    const likedClass = track => {
        return track.is_liked === 0 ? 'not_liked' : 'liked'
    }

    const onButton = track => {
        if (track === audio.getSong())
            audio.playHandle()
        else {
            audio.setPlaylist(tracks, track.track_id)
        }
    }

    return (
        <div className="tablesize">
            <table className="table table-borderless" >
                <thead>
                    <tr>
                        <th></th>
                        <th className='border_th' ></th>
                        <th className='border_th' scope="col">TITLE</th>
                        <th className='border_th' scope="col">ARTIST</th>
                        <th className='border_th' scope="col">ALBUM</th>
                        <th className='border_th' scope="col">RELEASE DATE</th>
                    </tr>
                </thead>
                <tbody >
                    {tracks.map((track, index) => {
                        return <tr key={index} className='song_row' >
                            <td className="button" onClick={() => onButton(track)}><img src={createButton(track)} className="liked" alt="" /></td>
                            <td className='border_td' onClick={() => onLike(track)}><img src={isLiked(track)} className={likedClass(track)} alt="" /></td>
                            <td className='border_td' >{track.name}</td>
                            <td className='border_td' >{track.artists_names}</td>
                            <td className='border_td' >{track.album_name}</td>
                            <td className='border_td' >{track.release_date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongsTable;