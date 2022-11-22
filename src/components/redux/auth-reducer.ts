import {Dispatch} from "redux";
import {authApi, LoginParamsType} from "../../api/api";

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    // создаем еще один флаг для нашей компоненты (крутилка)
    // isInitialized:false
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
        case "auth/SET-USER-DATA": {
            //debugger
            return {...state, ...action.data}
            //      return {...state, ...action.data, isAuth:true}
        }

        case "auth/IS-LOGGED-IN": {
            return {...state, isAuth: action.isAuth}
        }
        case "auth/SET-ERROR":{
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
        type: 'auth/SET-USER-DATA',
        data
    } as const
}

export const setIsLoggedInAC = (isAuth: boolean) => ({type: 'auth/IS-LOGGED-IN', isAuth} as const)

//2 создаем AC для обработки ошибок

export const setErrorAC = (error:null|string) => {
  return{
      type:'auth/SET-ERROR',
      error
  }as const
}

//thunk


// export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
//   return authApi.me()
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 // let {id, email, login} = res.data.data
//                 // dispatch(setAuthUserDataAC({id, email, login}))
//                 dispatch(setAuthUserDataAC(res.data.data))
//
//                 // //?????????????
//                  dispatch(setIsLoggedInAC(true))
//             }
//         })
// }

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
   let res = await authApi.me();

            if (res.data.resultCode === 0) {
                // let {id, email, login} = res.data.data
                // dispatch(setAuthUserDataAC({id, email, login}))
                dispatch(setAuthUserDataAC(res.data.data))

                // //?????????????
                dispatch(setIsLoggedInAC(true))
            }

}

export const setIsLoggedInTC = (data: LoginParamsType) => async (dispatch: Dispatch) => {
//debugger
   let res = await authApi.login(data)

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
}

export const logOutTC = () => async (dispatch: Dispatch) => {
   let res = await authApi.logOut()

            if (res.data.resultCode === 0) {
                // dispatch(setIsLoggedInAC(true))
                dispatch(setIsLoggedInAC(false))
            }

}
