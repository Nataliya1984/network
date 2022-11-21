import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, InitialStateType, PostType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


export type MapStatePropsType = {
    profilePage: InitialStateType
    isAuth:boolean
    post:Array<PostType>
}

export type MapDispatchPropsType = {
    addPost: (newPostText:string) =>void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        isAuth:state.auth.isAuth,
        post:state.profilePage.post
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        //5 addPost будет принимать значение поста newPostText
        addPost: (newPostText:string) => {
            //6 этот newPostText мы передаем в экшен крейтор
            dispatch(addPostAC(newPostText))
        }
    }
}

 export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)