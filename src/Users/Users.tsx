import React from "react";
import {MapStateUserToPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import userPhoto from "../assets/imeges/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = MapStateUserToPropsType & {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanges: (pageNumber: number) => void
}

type FollowAndUnFollowResponse = {
    resultCode: number
    messages: Array<string>
        data: {}
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
                                       ? <button onClick={() => {

                                           axios.delete<FollowAndUnFollowResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,  {
                                               withCredentials:true,
                                               headers:{
                                                   'API-KEY': '2cc0480d-3d45-4b44-9014-133174ac3a11'
                                               }
                                           })
                                               .then((res) => {
                                                 //   debugger
                                                   if (res.data.resultCode === 0){
                                                       props.unFollow(el.id)
                                                   }
                                               })


                                       }}>UnFollow</button>
                                       : <button onClick={() => {


                                           axios.post<FollowAndUnFollowResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {} , {
                                               withCredentials:true,
                                               headers:{
                                                   'API-KEY': '2cc0480d-3d45-4b44-9014-133174ac3a11'
                                               }
                                           })
                                               .then((res) => {
                                                   // debugger
                                                  if (res.data.resultCode === 0){
                                                      props.follow(el.id)
                                                  }
                                               })

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