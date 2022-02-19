import classes from "./Message.module.css";
import React from "react";


type MessagePropsType = {
    message: string,
    id:number,
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message;