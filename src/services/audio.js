import axios from 'axios';


const url =  'http://api.sprintt.co/spotify/'
const token = '04f035ea-172d-4a93-82bf-3841d116e387'
const header = {"user-access-token": '04f035ea-172d-4a93-82bf-3841d116e387'}
let a = ''

const getEncryptedToken = (token) => {
    let date = new Date();
    let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
    let stringToEncrypt = `${token}===${utcTime}`
    return btoa(stringToEncrypt)
  }

const newToken = getEncryptedToken(token)

export const addToRecently = async (playlist_id, song_id) => {
  return await axios.post(`${url}notify_played/${playlist_id}/${song_id}`,{} ,{headers: header}) 
}

export const setSong = song_id => {
  a = new Audio(`${url}play/${song_id}?access=${newToken}`)
  a.load()
}

export const play = () => {
  if (a !== '')
    a.play()
}

export const pause = () => {
  if (a !== '')
    a.pause()
}

export const duration = () => {
  return a !== '' ? a.duration : 0
}

export const getCurrentTime = () => {
  return a !== '' ? a.currentTime : 0
}


