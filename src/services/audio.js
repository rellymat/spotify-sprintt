import axios from 'axios';

const url = 'http://api.sprintt.co/spotify/'
const token = '04f035ea-172d-4a93-82bf-3841d116e387'
const header = { "user-access-token": '04f035ea-172d-4a93-82bf-3841d116e387' }
let track = ''
let playlist = []
let isPlay = false


const getEncryptedToken = (token) => {
  let date = new Date()
  let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
  let stringToEncrypt = `${token}===${utcTime}`
  return btoa(stringToEncrypt)
}

export const playHandle = () => {
  if (track !== ''){
    isPlay = !isPlay
    if (isPlay) 
      play()
    else
      pause()
  }
}

export const addToRecently = async (playlist_id, song_id) => {
  return await axios.post(`${url}notify_played/${playlist_id}/${song_id}`, {}, { headers: header })
}

export const setPlaylist = (newPlaylist, track_id) => {
  playlist = newPlaylist
  setSong(track_id)
}

export const setSong = song_id => {
  const newToken = getEncryptedToken(token)
  const trackAPI = `http://api.sprintt.co/spotify/play/${song_id}?access=${newToken}`
  track = new Audio(trackAPI)
  track.load()
  setVolume(0.5)
}

export const getSong = () => {
  return track
}

export const play = () => {
  if (track !== '')
    track.play()
}

export const isFinish = () => {
  return track !== '' && track.currentTime >= track.duration
}

export const resetAudio = () => {
  track.currentTime = 0
}

export const pause = () => {
  if (track !== '')
    track.pause()
}

export const duration = () => {
  return track !== '' ? track.duration : 0
}

export const setVolume = volume => {
  if (track !== '')
    track.volume = volume
}

export const getVolume = () => {
  return track !== '' ? track.volume : 0.5
}

export const getCurrentTime = () => {
  return track !== '' ? track.currentTime : 0
}

export const setCurrentSong = index => {
  track.pause()
  setSong(playlist[index].track_id)
}

export const songDone = () => {
  const trackIndex = playlist.indexOf(track)
  if (trackIndex !== playlist.length - 1) {
    setCurrentSong(trackIndex + 1)
  } else {
    isPlay = false
  }
}

export const previousSong = () => {
  const trackIndex = playlist.indexOf(track)
  if (trackIndex !== 0)
    setCurrentSong(trackIndex - 1)
  else
    setCurrentSong(playlist.length - 1)
}

export const nextSong = () => {
  const trackIndex = playlist.indexOf(track)
  if (trackIndex !== playlist.length - 1)
    setCurrentSong(trackIndex + 1)
  else
    setCurrentSong(0)
}

export const getIsPlay = () => {
  return isPlay
}

export const setIsPlay = () => {
  isPlay = !isPlay
}


