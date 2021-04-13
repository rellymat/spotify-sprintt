import React from 'react';
import not_liked from '../assets/not_liked.png'
import play_icon from '../assets/play_line_icon.png'


const SongsTable = ({ table }) => {
    const tracks = table
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
                        return <tr key={index} className='song_row'>
                            <td className="button"><img src={play_icon} className="liked" alt="" /></td>
                            <td className='border_td'><img src={not_liked} className="liked" alt="" /></td>
                            <td className='border_td'>{track.name}</td>
                            <td className='border_td'>{track.artists_names}</td>
                            <td className='border_td'>{track.album_name}</td>
                            <td className='border_td'>{track.release_date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongsTable;