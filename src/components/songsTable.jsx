import React from 'react';
import { table } from './../services/table';

const SongsTable = () => {
    const tracks = table.tracks
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">TITLE</th>
                    <th scope="col">ARTIST</th>
                    <th scope="col">ALBUM</th>
                    <th scope="col">RELEASE DATE</th>
                </tr>
            </thead>
            <tbody>
             {tracks.map((track, index) => {
                 return <tr key={index}>
                    <td></td>
                    <td>{track.name}</td>
                    <td>{track.artists_names}</td>
                    <td>{track.album_name}</td>
                    <td>{track.release_date}</td>
                 </tr>
             })}
            </tbody>
        </table>
    );
}

export default SongsTable;