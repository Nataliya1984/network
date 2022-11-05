import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {ProfileType, setUserProfileTC} from "../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";


export type MapStateUserProfileToPropsType ={
    profile:ProfileType
}

export type MapDispatchProfilePropsType ={
    setUserProfileTC:(userId:string)=>any
}

type PropsType = MapStateUserProfileToPropsType & MapDispatchProfilePropsType


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

        let userId = this.props.router.params.userId

        this.props.setUserProfileTC(userId)

         // let userId = this.props.router.params.userId
         //
         //    profileApi.getProfile(userId)
         //    .then((res) => {
         //        // debugger
         //        this.props.setUserProfile(res.data)
         //    })
    }

    render() {
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
    setUserProfileTC
}) (withRouter<any>(ProfileContainer));
