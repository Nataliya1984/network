import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


export type MapStatePropsType = {
    profilePage: InitialStateType
}

export type MapDispatchPropsType = {
    updateNewPostText: (text: string) =>void
    addPost: () =>void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

 export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)