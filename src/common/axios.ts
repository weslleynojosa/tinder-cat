import axios, { AxiosError, AxiosResponse } from "axios";

const apiKey = 'live_PbimgnXXlyTQE91Q2j3ReViKjeyClZ2QUpghEUUiYtPUKAR5CT0Aw9jnnsYeYHJz'

const Api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': apiKey
    }
})


export default Api