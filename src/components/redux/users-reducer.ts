import {Dispatch} from "redux";
import {followApi, usersApi} from "../../api/api";
import {updateObjectInArray} from "../../utils/object-helpers";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string

    }
    followed: boolean
    name: string
    status: string
    location?: LocationType
}


export type LocationType = {
    city: string
    country: string
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: userReducerType): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW': {
            return {
                ...state, users:updateObjectInArray(state.users, action.payload.userId, 'id', {followed: true})
                // users: state.users.map((el: any) => el.id === action.payload.userId
                 //   ? {...el, followed: true} : el)
            }
        }
        case "users/UN-FOLLOW": {
            return {
                ...state, users:updateObjectInArray(state.users, action.payload.userId, 'id', {followed: false})
                // ...state, users: state.users.map((el: any) => el.id === action.payload.userId
                //     ? {...el, followed: false} : el)
            }
        }
        case "users/SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "users/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "users/SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case "users/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "users/TOGGLE-IS-FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
            //  return {...state, followingInProgress:action.followingInProgress}
        }
        default:
            return state
    }
}

//action
export const follow = (userId: number) => {
    return {
        type: 'users/FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unFollow = (userId: number) => {
    return {
        type: 'users/UN-FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'users/SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'users/SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'users/SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'users/TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'users/TOGGLE-IS-FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const
}

//thunk

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    //изменяем страницу при нажатии
    dispatch(setCurrentPage(currentPage))

    let res = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
    dispatch(toggleIsFetching(false))
}

//убираем дублирование кода followTC и unFollowTC. Создаем функцию : выделяем общую логику в функцию
const followUnfollowFlow = async (dispatch:Dispatch, id:number, apiMethod:any, actionCreator:any ) => {
    // dispatch(toggleIsFollowingProgressAC(true, id))
    //
    // let res = await followApi.getFollow(id)
    // if (res.data.resultCode === 0) {
    //     dispatch(unFollow(id))
    // }
    // dispatch(toggleIsFollowingProgressAC(false, id))
    dispatch(toggleIsFollowingProgressAC(true, id))

    let res = await apiMethod(id)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingProgressAC(false, id))
}

export const followTC = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = followApi.getFollow.bind(followApi)
    let actionCreator = unFollow
    await followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
}

export const unFollowTC = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = followApi.deleteFollow.bind(followApi)
    let actionCreator = follow
    await followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
}

//type

export type userReducerType = followACType
    | unFollowACType
    | setUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingProgressACType

export type followACType = ReturnType<typeof follow>
export type unFollowACType = ReturnType<typeof unFollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgressAC>