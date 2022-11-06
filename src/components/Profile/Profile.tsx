import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../redux/profile-reducer";
import { Navigate } from "react-router-dom";


export type ProfilePropsType={
    profile:ProfileType
}

function Profile(props:ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )

}

export default Profile;