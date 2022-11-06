import React from 'react';
import Dialogs from "./Dialogs";
import {addMessagAC, InitialStateType, updateNewMessagTextAC} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../HOC/AuthRedirect";



type MapStatePropsType = {
    dialogsPage:InitialStateType
    isAuth:boolean
}

type MapDispatchPropsType = {
    updateNewDialogText: (text:string)=>void
    addMessag:()=>void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateNewDialogText: (text:string)=>{
            dispatch(updateNewMessagTextAC(text))
        },
        addMessag:()=>{
           // dispatch(addMessagAC(store.getState().dialogsPage.newMessagText))
            dispatch(addMessagAC())
        },
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
//     (props:any) => {
//
//     if (props.isAuth===false){
//         return <Navigate to={'/login'}/>
//     }
//
//    // debugger
//
//     return(
//         <Dialogs {...props}/>
//     )
// }

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

