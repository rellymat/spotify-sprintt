import React from 'react';
import not_liked from '../assets/not_liked.png'
import play_icon from '../assets/play_line_icon.png'
import pause_icon from '../assets/pause_line_icon.png'


const SongsTable = ({ table, onSong, onButton, isPlay, track }) => {
    const tracks = table

    const createButton = song => {
        if (song === track)
            return isPlay ? pause_icon : play_icon
        return play_icon
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
                            <td className='border_td'><img src={not_liked} className="liked" alt="" /></td>
                            <td className='border_td' onClick={() => onSong(track)}>{track.name}</td>
                            <td className='border_td' onClick={() => onSong(track)}>{track.artists_names}</td>
                            <td className='border_td' onClick={() => onSong(track)}>{track.album_name}</td>
                            <td className='border_td' onClick={() => onSong(track)}>{track.release_date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongsTable;