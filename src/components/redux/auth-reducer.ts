import {Dispatch} from "redux";
import {authApi} from "../../api/api";

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth:boolean
}

export type DataType = {
    id: number
    email: string
    login: string
}

export const authReducer = (state: InitialStateType = initialState, action: authReducerType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            //debugger
            return {
                 ...state, ...action.data, isAuth:true
            }
        }
        default:
            return state
    }

}

export type authReducerType = SetUserDataACType

export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>


export const setAuthUserDataAC = (data:{id: number, email: string, login: string}) => {
  return{
      type:'SET-USER-DATA',
     data
  }as const
}

//thunk


export const setAuthUserDataTC = () =>(dispatch:Dispatch)=> {
    authApi.me()
        .then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC({id, email, login}))
            }
        })

}