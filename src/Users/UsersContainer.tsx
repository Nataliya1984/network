import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow,
    UserType
} from "../components/redux/users-reducer";
import {AppStateType} from "../components/redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStateUserToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching:(isFetching:boolean)=>void

}

export type UsersPropsType = MapStateUserToPropsType
    & MapDispatchPropsType & {
    onPageChanges: (pageNumber: number) => void
}

type GetUsersResponse={
    items:Array<UserType>
    totalCount:number
    error:string
}

export class UsersContainer extends React.Component<MapStateUserToPropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then((res) => {
                // debugger
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanges = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then((res) => {
              //  debugger
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   usersPage={this.props.usersPage}
                   onPageChanges={this.onPageChanges.bind(this)}
                   isFetching={this.props.isFetching}
            />
        </>

    }
}

export let mapStateToProps = (state: AppStateType): MapStateUserToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)
