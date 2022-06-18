import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../redux/state";

type ProfilePropsType = {
    // state:ProfilePageType
    // newPostText:string
    // dispatch:(action:ActionsTypes)=>void
    store: StoreType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                // dispatch={props.dispatch}
                // state={props.state.post}
                // newPostText={props.state.newPostText}
                store={props.store}
            />
        </div>
    )

}

export default Profile;