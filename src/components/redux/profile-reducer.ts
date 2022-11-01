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
    newPostText: '',
     profile: {
         aboutMe:'',
         userId: 0,
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
     }
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerType): InitialStateType => {

    switch (action.type) {
        case "ADD-POST": {
            let message = state.newPostText
            return {...state, newPostText: '', post: [...state.post, {id: 10, message: message, likesCount: 4}]}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
           // debugger
           return {...state, profile:action.profile}
        }
        default:
            return state
    }

}

export type ProfileReducerType = addPostACType | updateNewPostTextAC
    | SetUserProfileType

export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>


export const addPostAC = () => {
    return {
        type: 'ADD-POST',
        // newPostText: postText
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}