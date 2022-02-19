import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";
// import {postType} from "../../App";

type ProfilePropsType ={
    state:ProfilePageType
    addPost:(postMessage:string)=>void
}

function Profile(props:ProfilePropsType) {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )

}

export default Profile;