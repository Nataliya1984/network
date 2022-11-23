// 80(2) нам нужны сюда все юзеры
// ............. pageSize
// ............. totalUsersCount и т.д
// селектор - это функция, которая принимает стейт (весь стейт целиком), достает из него, то что нужно и возвращает в бизнес

import {AppStateType} from "./redux-store";


export const getUsers= (state: AppStateType)=>{
return state.usersPage.users
}

export const getPageSize = (state: AppStateType)=>{
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state: AppStateType)=>{
    return state.usersPage.totalUsersCount
}

//запрашиваем текущую страницу
export const getCurrentPage = (state: AppStateType)=>{
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType)=>{
    return state.usersPage.followingInProgress
}

