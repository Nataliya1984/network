import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { StoreType} from "../redux/state";
//import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfilePropsType = {
    // state:ProfilePageType
    // newPostText:string
     //dispatch:(action:ActionsTypes)=>void
    store: StoreType

}

//function Profile(props: ProfilePropsType) {
function Profile() {

    return (
        <div>
            <ProfileInfo/>

            {/*<MyPostsContainer*/}

            {/*     //dispatch={props.dispatch}*/}
            {/*    // state={props.state.post}*/}
            {/*    // newPostText={props.state.newPostText}*/}

            {/*   // store={props.store}*/}
            {/*/>*/}

        </div>
    )

}

export default Profile;