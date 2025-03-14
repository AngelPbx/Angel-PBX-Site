import axios from "axios"

const baseUrl = "https://testing.webvio.in/backend/api"
// const baseUrl = "http://127.0.0.1:8000/api"

// General Get Function
export async function generalGetFunction (endpoint){
    return axios.get(`${baseUrl}/${endpoint}`
    ).then(res=>{
        console.log("This is response",res.data);
        return res.data
        
    }).catch(err=>{
        return err.response.data
        
    })
}

// General Post Function
export async function generalPostFunction (endpoint,data){
    return axios.post(`${baseUrl}/${endpoint}`,data).then(res=>{
        return res.data
    }).catch(err=>{
        return err.response.data
        
    })
}

// ImageUpload function
export async function imageUploadFunction (endpoint,data){
    return axios.post(`${baseUrl}/${endpoint}`,data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res=>{
        return res.data
    }).catch(err=>{
        return err.response.data
        
    })
}

// General Logout Function
export async function authGetFunction (endpoint,token){
    return axios.get(`${baseUrl}/${endpoint}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(res=>{
        return res.data
    }).catch(err=>{
        return err.response.data
        
    })
}