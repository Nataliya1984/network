import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemType = {
    name:string,
    id:number,
}

function DialogItem(props: DialogItemType) {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={'/dialogs/' + props.id}
                     className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;