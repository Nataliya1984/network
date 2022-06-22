import React from 'react';
import {StoreType} from "../../redux/state";
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";

export type MyPostsContainerPropsType={
    store:StoreType
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {

    let state = props.store.getState().profilePage

    let onChangeHandler= (text:string) => {
            props.store.dispatch(updateNewPostTextAC(text))
    }

    let addPost = () => {
            props.store.dispatch(addPostAC(state.newPostText))
    }


    return (
       <MyPosts updateNewPostText={onChangeHandler}
                addPost={addPost}
                profilePage={state}
       />
    );
};

