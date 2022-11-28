import React, {ChangeEvent} from "react";
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/imeges/user.png";




export type ProfileInfoPropsType = {
    profile:any
    status:string
    updateStatusTC:(status:string)=>any
    isOwner:boolean
    savePhoto:(file:any)=>any
}

function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelectedHandle = (e:ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files){
          props.savePhoto(e.currentTarget.files[0])
      }
    }

    return (
        <div>
            <h1>Страница профиля</h1>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelectedHandle}/>}
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.userId}</div>
                <div>{props.profile.lookingForAJobDescription}</div>

                <div>
                    <br/>
                    <ProfileStatusWithHooks status={props.status}
                                            updateStatusTC={props.updateStatusTC}
                    />
                    {/*<ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>*/}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;