import React, { useContext } from 'react';
import { PlayerContext } from './player';
import not_liked from '../assets/not_liked.png'
import liked from '../assets/liked.png'
import play_icon from '../assets/play_line_icon.png'
import pause_icon from '../assets/pause_line_icon.png'

const SongsTable = ({ table, onLike, setToRecently, image }) => {
    const { isPlaying, track, setNewSong, setImage } = useContext(PlayerContext)
    const playlist = table
    
    const createButton = song => { 
        if (song.track_id === track[0].track_id)
            return isPlaying[0] ? pause_icon : play_icon
        return play_icon
    }

    const isLiked = song => {
        if (song.is_liked === 0)
            return not_liked
        return liked
    }

    const likedClass = song => {
        return song.is_liked === 0 ? 'not_liked' : 'liked'
    }

    const onButton = song => {
        setImage(image)
        if (song.track_id === track[0].track_id)
            isPlaying[1](!isPlaying[0])
        else {
            setNewSong(playlist, song)
            setToRecently(song.track_id)
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
                    {playlist.map((song, index) => {
                        return <tr key={index} className='song_row' >
                            <td className="button" onClick={() => onButton(song)}><img src={createButton(song)} className="liked" alt="" /></td>
                            <td className='border_td' onClick={() => onLike(song)}><img src={isLiked(song)} className={likedClass(song)} alt="" /></td>
                            <td className='border_td' >{song.name}</td>
                            <td className='border_td' >{song.artists_names}</td>
                            <td className='border_td' >{song.album_name}</td>
                            <td className='border_td' >{song.release_date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongsTable;