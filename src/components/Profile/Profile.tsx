import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export type ProfilePropsType={
    profile:any
    status:string
    updateStatusTC:(status:string)=>any
    isOwner:boolean
    savePhoto:(file:any)=>any
}

const Profile = React.memo(({profile, status, updateStatusTC, isOwner, savePhoto}:ProfilePropsType) =>{

   // console.log('render Profile')
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatusTC={updateStatusTC}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )

})

export default Profile;