import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/api";

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    isLoggedIn:false
}

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth:boolean
    isLoggedIn:boolean
}


export const authReducer = (state: InitialStateType = initialState, action: authReducerType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            //debugger
            return {...state, ...action.data, isAuth:true}
        }
        case "IS-LOGGED-IN":{
            return {...state, isLoggedIn:action.isLoggedIn}
        }
        default:
            return state
    }

}

export type authReducerType = SetUserDataACType|setIsLoggedInACType

export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>


export const setAuthUserDataAC = (data:{id: number, email: string, login: string}) => {
  return{
      type:'SET-USER-DATA',
     data
  }as const
}

export const setIsLoggedInAC = (isLoggedIn:boolean) => ({type:'IS-LOGGED-IN', isLoggedIn} as const)

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

export const setIsLoggedInTC = (data:LoginParamsType) =>(dispatch:Dispatch)=> {
debugger
    authApi.login(data)
        .then((res)=>{
         //   debugger
            if (res.data.resultCode === 0){
                dispatch(setIsLoggedInAC(true))
            }
        })
}