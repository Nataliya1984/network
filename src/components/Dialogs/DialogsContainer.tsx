import React from 'react';
import Dialogs from "./Dialogs";
import {addMessagAC, updateNewMessagTextAC} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {DialogsPageType, store} from "../redux/state";
import {ReduxReducerType} from "../redux/redux-store";
// import {StoreContext} from "../../../StoreContext";

// type DialogsContainerPropsType = {
//     store: StoreType
// }


// export const DialogsContainer = () => {
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState().dialogsPage
//
//                     const onChangeHandler = (text: string) => {
//                         store.dispatch(updateNewMessagTextAC(text))
//                     }
//
//                     let addMessag = () => {
//                         store.dispatch(addMessagAC(state.newMessagText))
//                     }
//
//                     return <Dialogs updateNewDialogText={onChangeHandler}
//                                     addMessag={addMessag}
//                                     dialogsPage={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
//  };


export type MapStatePropsType = {
    dialogsPage:DialogsPageType
}


let mapStateToProps = (state:ReduxReducerType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewDialogText: (text:string)=>{
            dispatch(updateNewMessagTextAC(text))
        },
        addMessag:()=>{
            dispatch(addMessagAC(store.getState().dialogsPage.newMessagText))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

