import axios from "axios";
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
    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}

export const followApi = {
    getFollow(id: number) {
        return instance.delete<FollowAndUnFollowResponse>(`follow/${id}`)
            .then((res) => {
                return res.data
            })
    },
    deleteFollow(id: number) {
        return instance.post<FollowAndUnFollowResponse>(`follow/${id}`)
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

type FollowAndUnFollowResponse = {
    resultCode: number
    messages: Array<string>
    data: {}
}