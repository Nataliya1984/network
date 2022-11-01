import classes from "../../Users/Users.module.css";
import preloader from "../../assets/imeges/loader.gif";
import React from "react";

export type PreloaderPropsType = {

}

export const Preloader = (props:PreloaderPropsType) => {
  return(
      <img className={classes.loader} src={preloader}/>
  )
}