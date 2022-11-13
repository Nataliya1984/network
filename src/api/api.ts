import axios, {AxiosResponse} from "axios";
import {UserType} from "../components/redux/users-reducer";
import {GetAuthResponse} from "../components/Header/HeaderContainer";
import {ProfileType} from "../components/redux/profile-reducer";




const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6facda8-d6cc-4669-9af0-a890cb17e0bd'
    }

})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    }
}

export const authApi = {
    me() {
        return instance.get<GetAuthResponse>('auth/me')
            .then((res) => {
                return res.data
            })
    },
    login(data:LoginParamsType){
       // debugger
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId:number}>>>('/auth/login', data)
    }

}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId:number){
        return instance.get<any>(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put<ResponseType>(`profile/status`, {status:status})
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

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type LoginParamsType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}