import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfilePropsType ={
    state:ProfilePageType
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

function Profile(props:ProfilePropsType) {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.post}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )

}

export default Profile;