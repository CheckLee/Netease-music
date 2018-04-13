import axios from 'axios'

export default {
  GetPersonalFM() {
    return axios.get('/personal_fm')
  },
  GetSong(id) {
    return axios.get(`/music/url?id=${id}`)
  }
}