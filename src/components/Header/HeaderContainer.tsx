import React from "react";
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {logOutTC} from "../redux/auth-reducer";


export type MapStateAuthToPropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchAuthPropsType = {
    logOutTC:()=>void
}

type PropsType = MapStateAuthToPropsType & MapDispatchAuthPropsType

export class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logOutTC={this.props.logOutTC}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateAuthToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
     logOutTC
})(HeaderContainer);