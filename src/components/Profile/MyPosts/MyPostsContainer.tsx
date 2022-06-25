import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {ReduxReducerType} from "../../redux/redux-store";
import {ProfilePageType, store} from "../../redux/state";


export type MapStatePropsType = {
    profilePage: ProfilePageType
}

let mapStateToProps = (state: ReduxReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC(store.getState().profilePage.newPostText))
        }
    }
}

 export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)