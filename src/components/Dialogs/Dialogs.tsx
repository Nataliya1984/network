import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props:any) {
    return(
            <div className={`${classes.dialog} ${classes.active}`}>
                <NavLink to={'/dialogs/' + props.id} className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>{props.name}</NavLink>
            </div>
    )
}

function Message(props:any) {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    )
}


function Dialogs(props: any) {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={'Natasha'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Katya'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Lesha'} id={'5'}/>
                
            </div>
            
            <div className={classes.messages}>
                <Message message={'Hi'} id={'1'}/>
                <Message message={'How is your it-kamasutra?'} id={'2'}/>
                <Message message={'Yo'} id={'3'}/>
                <Message message={'Yes'} id={'4'}/>
            </div>
        </div>
    )
}

export default Dialogs;