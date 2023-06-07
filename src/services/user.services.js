import axios from "axios";

 const usersPublicApi = axios.create({
    baseURL: "https://63e61ee87eef5b22337f4289.mockapi.io"
})


export const getUsers = async(params ={})=> {
    const {data} = await usersPublicApi.get("/users", {params: {...params}})
    return data
}




