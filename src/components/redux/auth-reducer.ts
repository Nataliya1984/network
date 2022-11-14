import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/api";

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}

export type InitialStateType = {
    id: null|number
    email: null | string
    login: null | string
    isAuth: boolean
    error: null | string
}

export const authReducer = (state: InitialStateType = initialState, action: authReducerType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            //debugger
            return {...state, ...action.data}
            //      return {...state, ...action.data, isAuth:true}
        }

        case "IS-LOGGED-IN": {
            return {...state, isAuth: action.isAuth}
        }
        case "SET-ERROR":{
            return {...state, error:action.error}
        }

        default:
            return state
    }

}

export type authReducerType = SetUserDataACType | setIsLoggedInACType |SetErrorACType

export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>
export type SetErrorACType = ReturnType<typeof setErrorAC>

export const setAuthUserDataAC = (data: { id: number, email: string, login: string }) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}

export const setIsLoggedInAC = (isAuth: boolean) => ({type: 'IS-LOGGED-IN', isAuth} as const)

//2 создаем AC для обработки ошибок

export const setErrorAC = (error:null|string) => {
  return{
      type:'SET-ERROR',
      error
  }as const
}

//thunk


export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    authApi.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserDataAC({id, email, login}))

            }
        })
}

export const setIsLoggedInTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
//debugger
    authApi.login(data)
        // .then((res) => {
        //     //   debugger
        //     if (res.data.resultCode === 0) {
        //         // dispatch(setIsLoggedInAC(true))
        //         dispatch(setIsLoggedInAC(true))
        //     } else {
        //         if (res.data.messages.length){
        //             dispatch(setErrorAC(res.data.messages[0]))
        //         }else{
        //             dispatch(setErrorAC('произошла ошибка'))
        //         }
        //
        //     }
        // })

        .then((res) => {
            //   debugger
            if (res.data.resultCode === 0) {
                // dispatch(setIsLoggedInAC(true))
                dispatch(setIsLoggedInAC(true))
            } else {
                if (res.data.messages.length){
                    dispatch(setErrorAC(res.data.messages[0]))
                }else{
                    dispatch(setErrorAC('произошла ошибка'))
                }

            }
        })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authApi.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                // dispatch(setIsLoggedInAC(true))
                dispatch(setIsLoggedInAC(false))
            }
        })
}
