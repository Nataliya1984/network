import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getStatusTC, ProfileType, setUserProfileTC, updateStatusTC} from "../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


export type MapStateUserProfileToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId:any
    isAuth:boolean
}

export type MapDispatchProfilePropsType = {
    setUserProfileTC: (userId: string) => any
    getStatusTC: (userId: string) => any
    updateStatusTC: (status: string) => any
}

type PropsType = MapStateUserProfileToPropsType & MapDispatchProfilePropsType


export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

export function withRouter<Props extends WithRouterProps>(Component: React.ComponentType<Props>) {
    function ComponentWithRouterProp(props: Omit<Props, keyof WithRouterProps>) {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component {...props as Props} router={{location, navigate, params}}/>
        );
    };
    return ComponentWithRouterProp
};

class ProfileContainer extends React.Component<PropsType & { router: WithRouterProps }> {


    componentDidMount() {
        let userId = this.props.router.params.userId

        if (!userId){
            //пробрасываем наш id
            userId = this.props.authorizedUserId
            // userId = '24664'
            if (!userId){
                return <Navigate to={'/login'}/>
            }
        }
       // debugger
        this.props.setUserProfileTC(userId)
        this.props.getStatusTC(userId)
        this.props.updateStatusTC(this.props.status)


        // let userId = this.props.router.params.userId
        //
        //    profileApi.getProfile(userId)
        //    .then((res) => {
        //        // debugger
        //        this.props.setUserProfile(res.data)
        //    })
    }

    render() {
       // console.log('произошла перерисовка')
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}/>
        )
    }


}

export let mapStateToProps = (state: AppStateType): MapStateUserProfileToPropsType => {
   // console.log('profile изменился')
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId:state.auth.id,
        isAuth:state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    // withAuthRedirect //нельзя попадать на страницу профиля незалогиненому пользователю
)
(ProfileContainer)

