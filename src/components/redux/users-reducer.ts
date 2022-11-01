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
    currentPage:1,
    isFetching:false
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
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
            return {...state, users:action.payload.users} //[...action.payload.users] }
        }
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage:action.payload.currentPage}
        }
        case "SET-TOTAL-COUNT":{
            return {...state, totalUsersCount:action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING":{
            return {...state, isFetching:action.payload.isFetching}
        }

        default:
            return state
    }

}

export type userReducerType = followACType
    | unFollowACType
    | setUsersACType
    | SetCurrentPageACType
    |SetTotalUsersCountACType
    |ToggleIsFetchingACType

export type followACType = ReturnType<typeof follow>
export type unFollowACType = ReturnType<typeof unFollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

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

export const setCurrentPage = (currentPage:number) => {
  return{
      type:'SET-CURRENT-PAGE',
      payload:{
          currentPage
      }
  }as const
}

export const setTotalUsersCount = (totalCount:number) => {
  return{
      type:'SET-TOTAL-COUNT',
      payload:{
          totalCount
      }
  }as const
}

export const toggleIsFetching = (isFetching:boolean) => {
  return{
      type: 'TOGGLE-IS-FETCHING',
      payload:{
          isFetching
      }
  }as const
}