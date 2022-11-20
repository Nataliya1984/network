import axios, {AxiosResponse} from "axios";
import {UserType} from "../components/redux/users-reducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6facda8-d6cc-4669-9af0-a890cb17e0bd'
    }

})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
       // debugger
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
            // .then((res) => {
            //     debugger
            //     return res.data
            // })
    }
}

export const authApi = {
    me() {
        //debugger
        return instance.get<ResponseType<MeResponseType>>(`auth/me`)
    },
    login(data:LoginParamsType){
        // debugger
         return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId:number}>>>(`/auth/login`, data)
    },

    logOut(){
      //  debugger
        return instance.delete<ResponseType>(`/auth/login`)
    }

}


export const profileApi = {
    getProfile(userId: number) {
       // debugger
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId:number){
       // debugger
        return instance.get<string, AxiosResponse<string>>(`profile/status/${userId}`)
    },
    updateStatus(status:string){
       // debugger
        return instance.put<string, AxiosResponse<ResponseType>>(`profile/status`, {status})
    }
}

export const followApi = {
    getFollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then((res) => {
                return res.data
            })
    },
    deleteFollow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
            .then((res) => {
                return res.data
            })
    }
}


//type

type GetUsersResponse = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type MeResponseType={
    id: number
    email: string
    login: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type LoginParamsType = {
    email:string
    password:string
    rememberMe?:boolean
    captcha?:string
}

export type GetProfileResponseType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    },
    status:string
}