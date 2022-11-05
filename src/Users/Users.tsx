import React from "react";
import {MapStateUserToPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import userPhoto from "../assets/imeges/user.png";
import {NavLink} from "react-router-dom";


type PropsType = MapStateUserToPropsType & {
    onPageChanges: (pageNumber: number) => void
    followTC:(id:number)=>any
    unFollowTC:(id:number)=>any
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    return (
                        <span
                            className={props.usersPage.currentPage === el ? classes.selectedPage : classes.selectedPagePadding}
                            onClick={(e) => {
                                props.onPageChanges(el)
                            }}>
                                {el}
                            </span>
                    )

                })}

            </div>
            {
                props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + el.id}>
                                        <img src={el.photos.small !== null ? el.photos.small : userPhoto}
                                             className={classes.usersPhoto}/>
                                    </NavLink>

                                </div>
                                <div>
                                   {el.followed

                                        ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {

                                            props.followTC(el.id)

                                           // props.toggleIsFollowingProgressAC(true, el.id)
                                           //
                                           // followApi.getFollow(el.id)
                                           //     .then((data) => {
                                           //         if (data.resultCode === 0){
                                           //             props.unFollow(el.id)
                                           //         }
                                           //         props.toggleIsFollowingProgressAC(false, el.id)
                                           //     })

                                       }}>UnFollow</button>


                                        : <button disabled={props.followingInProgress.some(id => id===el.id)} onClick={() => {

                                            props.unFollowTC(el.id)

                                           // props.toggleIsFollowingProgressAC(true, el.id)
                                           // followApi.deleteFollow(el.id)
                                           //     .then((data) => {
                                           //         // debugger
                                           //        if (data.resultCode === 0){
                                           //            props.follow(el.id)
                                           //        }
                                           //         props.toggleIsFollowingProgressAC(false, el.id)
                                           //     })

                                       }}>Follow</button>}

                                </div>
                            </span>

                            <span>
                                <span>
                                  <div>{el.name}</div>
                                  <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>{"el.location.country"}</div>
                                    <div>{"el.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })

            }
        </div>

    )
}