import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL:"http://localhost:3000"
})

export const getPresentList = () =>{
    return instance.get(`/presentList`).then(res => res.data);
}

export const getQuttingList = () =>{
    return instance.get(`/quttingList`).then(res => res.data);
}
