import React from "react";
import './Header.module.css';
import classes from "./Header.module.css";

function Header() {
    return(
        <header className={classes.header}>
            <img src='https://cdn.pixabay.com/photo/2017/12/13/23/27/no-background-3017971_960_720.png'/>
        </header>
    )
}

export default Header;