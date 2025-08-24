import axios from "axios"

const baseUrl = "http://localhost:8080/api/songs"

const getAll = () =>{
    return axios.get(baseUrl).then(response => response.data)
}

const create = (newObj) =>{
    return axios.post(baseUrl, newObj)
    .then(response => response.data)
}

export default {getAll, create}