import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




export type ProfilePropsType={
    profile:any
    status:string
    updateStatusTC:(status:string)=>any
}

const Profile = React.memo(({profile, status, updateStatusTC}:ProfilePropsType) =>{
   // console.log('render Profile')
    return (
        <div>
            <ProfileInfo profile={profile} status={status}
                         updateStatusTC={updateStatusTC}
            />
            <MyPostsContainer/>
        </div>
    )

})

export default Profile;