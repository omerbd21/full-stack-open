import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
    return axios.get(baseUrl)
}

export const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request
}

export default {
    getAll, create
}