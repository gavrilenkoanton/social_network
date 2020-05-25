import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "f699e834-3ba4-4cfe-9b9c-52ec69e9e514"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI ={
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)},
    follow (userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId){
        return instance.delete(`follow/${userId}`)
    },
    getMyprofile( ){
        return instance.get(`auth/me`)
    },
    setProfileInfo (userId){
        console.warn("Obsolete method. Please use ProfileAPI object")
        return profileAPI.setProfileInfo(userId)
    }
};

export const profileAPI ={
    setProfileInfo (userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status){
        debugger
        return instance.put(`profile/status`, {status: status})
    }
}