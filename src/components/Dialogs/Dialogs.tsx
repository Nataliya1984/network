import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Dialogs.module.css";
import Message from "./Massage/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPropsType} from "./DialogsContainer";


function Dialogs(props: DialogPropsType) {

    //let state = props.store.getState().dialogsPage
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d:any) => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map((m:any) => <Message key={m.id} message={m.message} id={m.id}/>);

    let newDialogsElement = React.createRef<HTMLTextAreaElement>();

    let addMessag = () => {
         if(newDialogsElement.current){
          //let text = newDialogsElement.current.value;
            props.addMessag()
            //props.store.dispatch(addMessagAC(state.newMessagText))
        }

    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      if(newDialogsElement.current){
          let text = newDialogsElement.current.value;
          props.updateNewDialogText(text)
          //props.store.dispatch(updateNewMessagTextAC(text))
      }
    }

    let onKeyPressHandler=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        e.key === 'Enter' && addMessag()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                  {messagesElements}
                <div>
                    <textarea ref={newDialogsElement}
                              value={state.newMessagText}
                              onChange={onChangeHandler}
                              onKeyPress={onKeyPressHandler}>

                    </textarea>
                </div>
                <div>
                    <button  onClick={addMessag}>Add post</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;