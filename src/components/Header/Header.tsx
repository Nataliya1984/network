import React from "react";
import './Header.module.css';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";



export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOutTC:()=>void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src='https://cdn.pixabay.com/photo/2017/12/13/23/27/no-background-3017971_960_720.png'/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth
                        ?<div>{props.login} - <button onClick={props.logOutTC}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;