import axios from 'axios';

const url = 'http://api.sprintt.co/spotify/'
const header = {"user-access-token": '04f035ea-172d-4a93-82bf-3841d116e387'}

export async function getRecently(){
    return await axios.get(`${url}recently_played_playlists?limit=10`, {headers: header})
}

export async function getFeatured(){
    return await axios.get(`${url}featured_playlists?limit=10`, {headers: header})
}
 
export async function getMood(){
    return await axios.get(`${url}mood_playlists?limit=10`, {headers: header})
}

export async function getPlaylist(playlistId){
    if(playlistId === 'liked_tracks')
        return getLikedSongs()
    const { data } = await axios.get(`${url}playlist_tracks/${playlistId}`, {headers: header})
    const { tracks, playlist_duration } = data
    return { tracks, playlist_duration }
}

export async function likeTrack(track_id, is_liked) {
    return await axios.post(`${url}liked_tracks/${track_id}?status=${is_liked}`, {} ,{headers: header})
}

export async function getLikedSongs(){
    const { data } = await axios.get(`${url}liked_tracks`, {headers: header})
    const { liked_tracks: tracks } = data
    const playlist_duration = ''
    return { tracks, playlist_duration }
}