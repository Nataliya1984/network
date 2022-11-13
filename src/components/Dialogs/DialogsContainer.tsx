import React from 'react';
import Dialogs from "./Dialogs";
import {addMessagAC, InitialStateType} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";



type MapStatePropsType = {
    dialogsPage:InitialStateType
    isAuth:boolean
}

type MapDispatchPropsType = {
    addMessag:(newMessagText:string)=>void
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
        addMessag:(newMessagText:string)=>{
           // dispatch(addMessagAC(store.getState().dialogsPage.newMessagText))
            dispatch(addMessagAC(newMessagText))
        },
    }
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )
// (Dialogs)
//
// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// //
// //
// //     (props:any) => {
// //
// //     if (props.isAuth===false){
// //         return <Navigate to={'/login'}/>
// //     }
// //
// //    // debugger
// //
// //     return(
// //         <Dialogs {...props}/>
// //     )
// // }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)

