import React from 'react';
import Dialogs from "./Dialogs";
import {addMessagAC, InitialStateType, updateNewMessagTextAC} from "../redux/dialogs-reducer";
import {connect} from "react-redux";

import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";



type MapStatePropsType = {
    dialogsPage:InitialStateType
}

type MapDispatchPropsType = {
    updateNewDialogText: (text:string)=>void
    addMessag:()=>void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

