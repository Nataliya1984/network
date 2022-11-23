import React from "react";
import {MapStateUserToPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type PropsType = MapStateUserToPropsType & {
    onPageChanges: (pageNumber: number) => void
    followTC: (id: number) => any
    unFollowTC: (id: number) => any
}

export const Users = ({
                          users,
                          onPageChanges,
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          followingInProgress,
                          followTC,
                          unFollowTC,
                      }: PropsType) => {

    // let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)
    //
    // let pages = []
    //
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div>

            <Paginator onPageChanges={onPageChanges} pageSize={pageSize} currentPage={currentPage}
                       totalUsersCount={totalUsersCount}/>
            <div>
                {
                    users.map(el => {
                        return (
                            <User key={el.id} followingInProgress={followingInProgress} followTC={followTC}
                                  unFollowTC={unFollowTC} user={el}
                            />
                        )
                    })
                }
            </div>


        </div>

    )
}