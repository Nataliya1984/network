import React from "react";
import './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {DataType, setAuthUserDataAC} from "../redux/auth-reducer";


export type GetAuthResponse = {
    data: {
        id:number
        login:string
        email: string
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export type MapStateAuthToPropsType = {
    isAuth:boolean
    login:string|null
}

export type MapDispatchAuthPropsType = {
    setAuthUserDataAC:(data:DataType)=>void
}

type PropsType = MapStateAuthToPropsType & MapDispatchAuthPropsType

export class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        //debugger
        axios.get<GetAuthResponse>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials:true
        })
            .then((res)=>{

               // debugger
                if (res.data.resultCode === 0){
                  //  debugger
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserDataAC({id, email, login})
                }
            })
    }

    render() {
        return (
             <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
             // <Header />
        )
    }
}

const mapStateToProps = (state: AppStateType):MapStateAuthToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }

}

export default connect (mapStateToProps, {
    setAuthUserDataAC
})(HeaderContainer);