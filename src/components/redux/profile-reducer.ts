import {Dispatch} from "redux";
import {profileApi} from "../../api/api";

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
    ] as Array<PostType>,
    // newPostText: '',
     profile: {
         aboutMe:'',
         userId: 2,
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
    status:''

}

export type ProfileType = {
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
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerType): InitialStateType => {

    switch (action.type) {
        //8 берем наш newPostText из экшена
        case "ADD-POST": {
            let message = action.newPostText
            return {...state, post: [{id: 10, message: message, likesCount: 4}, ...state.post]}
        }
        case "SET-USER-PROFILE": {
           // debugger
           return {...state, profile:action.profile}
        }
        case "SET-STATUS":{
            return {...state, status:action.status}
        }
        default:
            return state
    }

}

export type ProfileReducerType = addPostACType | SetUserProfileType |SetStatusACType

export type addPostACType = ReturnType<typeof addPostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusACType = ReturnType<typeof setStatusAC>

//7 передаем в экшен крейтор newPostText
export const addPostAC = (newPostText:string) => {
    return {
        type: 'ADD-POST',
         newPostText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}

export const setStatusAC = (status:string) => {
  return{
      type:'SET-STATUS',
      status
  }as const
}

//thunk

export const setUserProfileTC = (userId:number) => (dispatch:Dispatch)=>{
//debugger
    profileApi.getProfile(userId)
        .then((res) => {
            //debugger
            dispatch(setUserProfile(res.data))
        })
}

export const getStatusTC = (userId:number) =>(dispatch:Dispatch)=> {
//debugger
    profileApi.getStatus(userId)
        .then((res)=>{
           // debugger
            dispatch(setStatusAC(res.data))
        })

}

export const updateStatusTC = (status:string) =>(dispatch:Dispatch)=> {
   // debugger
    profileApi.updateStatus(status)
        .then((res)=>{
           // debugger
            if (res.data.resultCode ===0){
                dispatch(setStatusAC(status))
            }
        })

}

