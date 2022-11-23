import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../assets/imeges/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../components/redux/users-reducer";

type UserPropsType = {
    followingInProgress: Array<number>
    followTC: (id: number) => any
    unFollowTC: (id: number) => any
    user: UserType
}

export const User = ({followingInProgress, followTC, unFollowTC, user, ...props}: UserPropsType) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={classes.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      followTC(user.id)
                                  }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollowTC(user.id)
                                  }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"el.location.country"}</div>
                    <div>{"el.location.city"}</div>
                </span>
            </span>
        </div>

    )
}