import axios from 'axios';

const url =  'http://api.sprintt.co/spotify/'
const token = '04f035ea-172d-4a93-82bf-3841d116e387'

const getEncryptedToken = (token) => {
    let date = new Date();
    let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
    let stringToEncrypt = `${token}===${utcTime}`
    return btoa(stringToEncrypt)
  }

const newToken = getEncryptedToken(token)

export const getSong = song_id => {
  const a = new Audio(`${url}play/${song_id}?access=${newToken}`)
  a.load()
  return a
}
