import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Massage/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../redux/state";

type DialogsPropsType ={
    state:DialogsPageType
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogs.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map((m:any) => <Message key={m.id} message={m.message} id={m.id}/>);

    let newDialogsElement = React.createRef<HTMLTextAreaElement>();

    let addDialogs = () => {
        let text = newDialogsElement.current?.value;
        console.log(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {
                    dialogsElements
                }

            </div>

            <div className={classes.messages}>

                {
                    messagesElements
                }
                <div>
                    <textarea ref={newDialogsElement}></textarea>
                </div>
                <div>
                    <button  onClick={addDialogs}>Add post</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;