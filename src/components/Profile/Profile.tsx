import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../redux/profile-reducer";
import { Navigate } from "react-router-dom";


export type ProfilePropsType={
    profile:ProfileType
    status:string
    updateStatusTC:(status:string)=>any
}

function Profile(props:ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )

}

export default Profile;