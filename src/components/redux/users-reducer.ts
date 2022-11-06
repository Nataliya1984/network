import {Dispatch} from "redux";
import {followApi, usersApi} from "../../api/api";

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
    followingInProgress:Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: userReducerType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map((el: any) => el.id === action.payload.userId
                    ? {...el, followed: true} : el)
            }
        }
        case "UN-FOLLOW": {
            return {
                ...state, users: state.users.map((el: any) => el.id === action.payload.userId
                    ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
//debugger
            return {...state, users: action.payload.users} //[...action.payload.users] }
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING_PROGRESS":{
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter( el => el !== action.userId )
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
        type: 'FOLLOW',
        payload: {
            userId
        }

    } as const
}

export const unFollow = (userId: number) => {
    return {
        type: 'UN-FOLLOW',
        payload: {
            userId
        }

    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }

    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleIsFollowingProgressAC = (isFetching:boolean, userId:number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const
}

//thunk

export const getUsersTC = (currentPage:number, pageSize:number) => (dispatch:Dispatch) => {

    dispatch(toggleIsFetching(true))

    usersApi.getUsers(currentPage, pageSize)
        .then((data) => {
            // debugger
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
}

export const followTC = (id:number) => (dispatch:Dispatch) => {

    dispatch(toggleIsFollowingProgressAC(true, id))

    followApi.getFollow(id)
        .then((data) => {
            if (data.resultCode === 0){
                dispatch(unFollow(id))
            }
            dispatch(toggleIsFollowingProgressAC(false, id))
        })
}

export const unFollowTC = (id:number) => (dispatch:Dispatch)=>{
   // debugger
    dispatch(toggleIsFollowingProgressAC(true, id))
    followApi.deleteFollow(id)
        .then((data) => {
           // debugger
            // debugger
            if (data.resultCode === 0){
                dispatch(follow(id))
            }
            dispatch(toggleIsFollowingProgressAC(false, id))
        })
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