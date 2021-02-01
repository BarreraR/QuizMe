import config from '../config'
import TokenService from './token-service'

const ApiService = {
  //Quiz endpoint
  getQuiz() {
    return fetch(`${config.API_ENDPOINT}/quiz`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getCategoryQuiz(category) {
    return fetch(`${config.API_ENDPOINT}/quiz/${category}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postAnswer({ answered }) {
    return fetch(`${config.API_ENDPOINT}/quiz`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ answered }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
  },
  
  // admin endpoint

}

export default ApiService
