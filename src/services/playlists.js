import axios from 'axios';

const header = {"user-access-token": '04f035ea-172d-4a93-82bf-3841d116e387'}

export async function getRecently(){
    return await axios.get('http://api.sprintt.co/spotify/recently_played_playlists?limit=10', {headers: header})
}

export async function getFeatured(){
    return await axios.get('http://api.sprintt.co/spotify/featured_playlists?limit=10', {headers: header})
}
 
export async function getMood(){
    return await axios.get('http://api.sprintt.co/spotify/mood_playlists?limit=10', {headers: header})
}

export async function getPlaylist(playlistId){
    return await axios.get(`http://api.sprintt.co/spotify/playlist_tracks/${playlistId}`, {headers: header})
}


