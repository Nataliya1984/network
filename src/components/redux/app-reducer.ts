import {Dispatch} from "redux";
import {setAuthUserDataAC, setAuthUserDataTC} from "./auth-reducer";

const initialState:InitialStateType={
initialized:false
}

type InitialStateType={
    initialized:boolean
}

export const appReducer = (state:InitialStateType = initialState, action:ActionAppReducerType):InitialStateType => {
  switch (action.type) {
      case "SET-INITIALIZED":{
          return {...state, initialized:true}
      }
      default: return state
  }
}

//action
const setInitializedAC = () => {
  return{
      type:'SET-INITIALIZED'

  }as const
}


//thunk

export const setInitializedTC = () => (dispatch:any)=>{

let promise = dispatch(setAuthUserDataTC())
    //debugger
Promise.all([promise])
    .then(()=>{
        dispatch(setInitializedAC())
    })
}

//type

export type SetInitializedACType = ReturnType<typeof setInitializedAC>

export type ActionAppReducerType = SetInitializedACType