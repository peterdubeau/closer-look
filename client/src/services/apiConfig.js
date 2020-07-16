import axios from 'axios'

let apiUrl

const apiUrls = {
    production: '---HEROKU APP URL WILL GO HERE---',
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api
