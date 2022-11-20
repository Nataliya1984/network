import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export type ProfilePropsType={
    profile:any
    status:string
    updateStatusTC:(status:string)=>any
}

function Profile(props:ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatusTC={props.updateStatusTC}
            />
            <MyPostsContainer/>
        </div>
    )

}

export default Profile;