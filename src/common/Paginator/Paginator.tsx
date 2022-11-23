import React from "react";
import {InitialStateType, UserType} from "../../components/redux/users-reducer";
import classes from './Paginator.module.css'



type PropsType ={
     onPageChanges: (pageNumber: number) => void
    totalUsersCount:number
    pageSize:number
    currentPage:number
}

export const Paginator = ({onPageChanges, currentPage, pageSize, totalUsersCount}:PropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

            <div>
                {pages.map(el => {
                    return (
                        <span
                            className={currentPage === el ? classes.selectedPage : classes.selectedPagePadding}
                            onClick={(e) => {
                                onPageChanges(el)
                            }}>
                                {el}
                            </span>
                    )
                })}

            </div>


    )
}