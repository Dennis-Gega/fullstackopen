import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export function getAll()  {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

export function create(newObject) {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

export function update(id, newObject) {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data)
}

export function remove(id) {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}