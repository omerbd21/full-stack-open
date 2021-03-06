import axios from 'axios'

const baseUrl = '/api/persons'

export const getAll = () => {
    return axios.get(baseUrl)
}

export const create = newObject => {
    return axios.post(baseUrl, newObject)
}
export const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
export const deletePhone = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll, create, update, deletePhone
}