import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import React from "react";


type LoginType = MapStatePropsType

type MapStatePropsType = {
    isAuth: boolean
}

const Login = (props: LoginType) => {

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(Login)