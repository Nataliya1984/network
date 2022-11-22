import {Dispatch} from "redux";
import {profileApi} from "../../api/api";
import {setErrorAC} from "./auth-reducer";


export type  PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = typeof initialState

let initialState = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 4},
        {id: 3, message: "2 post", likesCount: 4},
        {id: 4, message: "3 post", likesCount: 4},
    ] as Array<PostType>,
    // newPostText: '',
    profile: {
        aboutMe: '',
        userId: 24664,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''

}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerType): InitialStateType => {

    switch (action.type) {
        //8 берем наш newPostText из экшена
        case "profile/ADD-POST": {
            let message = action.newPostText
            return {...state, post: [{id: 10, message: message, likesCount: 4}, ...state.post]}
        }
        case "profile/SET-USER-PROFILE": {
            // debugger
            return {...state, profile: action.profile}
        }
        case "profile/SET-STATUS": {
            return {...state, status: action.status}
        }
        case "profile/DELETE-POST": {
            return {...state, post: [...state.post.filter(el => el.id !== action.postId)]}
        }
        default:
            return state
    }

}

export type ProfileReducerType = addPostACType | SetUserProfileType | SetStatusACType | DeletePostACType

export type addPostACType = ReturnType<typeof addPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusACType = ReturnType<typeof setStatusAC>
export type DeletePostACType = ReturnType<typeof deletePostAC>

//7 передаем в экшен крейтор newPostText
export const addPostAC = (newPostText: string) => {
    return {
        type: 'profile/ADD-POST',
        newPostText
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'profile/SET-USER-PROFILE',
        profile: profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: 'profile/SET-STATUS',
        status
    } as const
}

export const deletePostAC = (postId: number) => {
    return {
        type: 'profile/DELETE-POST',
        postId
    } as const
}

//thunk

export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileApi.getProfile(userId)
    dispatch(setUserProfile(res.data))

}

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileApi.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileApi.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    } else {
        if (res.data.messages.length) {
            dispatch(setErrorAC(res.data.messages[0]))
        } else {
            dispatch(setErrorAC('произошла ошибка'))
        }
    }
}

