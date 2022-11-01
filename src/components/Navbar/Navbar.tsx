import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

/*type  NavbarPropsType = {
    to: string,
    className: object
}*/

function Navbar(props:any) {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={({isActive}) => `${isActive ? classes.activeLink : ''}`}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;