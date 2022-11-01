//withRouter, lesson 60
// import React from "react";
// import Profile from "./Profile";
// import axios from "axios";
// import {connect} from "react-redux";
// import {AppStateType} from "../redux/redux-store";
// import {setUserProfile} from "../redux/profile-reducer";
//
//
// export type MapStateUserProfileToPropsType ={
//     profile:GetProfileUserResponseType
// }
//
// export type MapDispatchProfilePropsType ={
//     setUserProfile:(profile: any)=>void
// }
//
// export type GetProfileUserResponseType={
//     aboutMe:string
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName:string
//     contacts:{
//         github:string
//         vk:string
//         facebook: string
//         instagram:string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
//     photos:{
//         small: string
//         large: string
//     }
// }
//
//
// class ProfileContainer extends React.Component<MapStateUserProfileToPropsType &MapDispatchProfilePropsType> {
//
//     componentDidMount() {
//         axios.get<GetProfileUserResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then((res) => {
//                 this.props.setUserProfile(res.data)
//             })
//     }
//
//     render() {
//         //debugger
//         return (
//             <Profile profile={this.props.profile}/>
//           // <Profile {...this.props}/>
//         )
//     }
//
//
// }
//
// export let mapStateToProps = (state:AppStateType):MapStateUserProfileToPropsType =>{
//     return {
//         profile:state.profilePage.profile
//     }
// }
//
// export default connect(mapStateToProps, {
//     setUserProfile,
// }) (ProfileContainer);
//------------------------------------
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";



export type MapStateUserProfileToPropsType ={
    profile:ProfileUserType
}

export type MapDispatchProfilePropsType ={
    setUserProfile:(profile: ProfileUserType)=>void
}

type PropsType = MapStateUserProfileToPropsType & MapDispatchProfilePropsType


export type ProfileUserType={
    aboutMe:string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName:string
    contacts:{
        github:string
        vk:string
        facebook: string
        instagram:string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos:{
        small: string
        large: string
    }
}


export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

export function  withRouter  <Props extends WithRouterProps>(Component: React.ComponentType<Props>) {
    function ComponentWithRouterProp (props: Omit<Props, keyof WithRouterProps>) {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component {...props as Props} router={{ location, navigate, params }}/>
        );
    };
    return ComponentWithRouterProp
};

class ProfileContainer extends React.Component<PropsType & { router: WithRouterProps }> {


    componentDidMount() {
//debugger
         let userId = this.props.router.params.userId
//debugger
        axios.get<ProfileUserType>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)

            .then((res) => {

                //debugger
                this.props.setUserProfile(res.data)
            })
    }

    render() {
//debugger
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

export let mapStateToProps = (state:AppStateType):MapStateUserProfileToPropsType =>{
    return {
        profile:state.profilePage.profile
    }
}


export default connect(mapStateToProps, {
    setUserProfile,
}) (withRouter<any>(ProfileContainer));
