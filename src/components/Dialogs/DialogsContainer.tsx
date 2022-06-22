import React from 'react';
import Dialogs from "./Dialogs";
import {addMessagAC, updateNewMessagTextAC} from "../redux/dialogs-reducer";
import {StoreType} from "../redux/state";

type DialogsContainerPropsType={
    store:StoreType
}

export const DialogsContainer = (props:DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    const onChangeHandler = (text:string) => {
            props.store.dispatch(updateNewMessagTextAC(text))
    }

    let addMessag = () => {
            props.store.dispatch(addMessagAC(state.newMessagText))
    }

    return (
        <Dialogs updateNewDialogText={onChangeHandler}
                 addMessag={addMessag}
                 dialogsPage={state}/>
    );
};

