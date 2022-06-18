import {ActionsTypes, PostType, ProfilePageType} from "./state";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

let initialState:ProfilePageType = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 4},
    ],
    newPostText: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes):ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":{
            let newPost: PostType = {id: 10, message: action.newPostText, likesCount: 4};
            state.post.push(newPost);
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT":{
            state.newPostText = action.newText
            return state
        }
        default: return state
    }

}


export const addPostAC =(postText:string)=>{
    return {
        type:'ADD-POST',
        newPostText: postText
    }as const
}

export const updateNewPostTextAC =(text:string)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    }as const
}