import React from 'react';
import {connect} from "react-redux";
import {
     followTC, getUsersTC,
    InitialStateType,
    setCurrentPage,
     unFollowTC,
} from "../components/redux/users-reducer";
import {AppStateType} from "../components/redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../components/redux/users-selectors";


export type MapStateUserToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

export type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => any
    followTC: (id: number) => any
    unFollowTC: (id: number) => any
}

export type UsersPropsType = MapStateUserToPropsType
    & MapDispatchPropsType & {
    onPageChanges: (pageNumber: number) => void
}


export class UsersContainer extends React.Component<MapStateUserToPropsType & MapDispatchPropsType> {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        //     usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((data) => {
        //         // debugger
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    onPageChanges = (pageNumber: number) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersApi.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   onPageChanges={this.onPageChanges.bind(this)}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unFollowTC={this.props.unFollowTC}

            />
        </>

    }
}

// 81(1) рефакторим мапстейттопропс, создаем для селекторов файл в редьюсерах users-selectors.ts

// export let mapStateToProps = (state: AppStateType): MapStateUserToPropsType => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//
//     }
// }

 export let mapStateToProps = (state: AppStateType): MapStateUserToPropsType => {
     return {
         // 80(3) заменяем значения селекторами
         usersPage: getUsers(state),
         pageSize: getPageSize(state),
         totalUsersCount: getTotalUserCount(state),
         currentPage: getCurrentPage(state),
         isFetching: getIsFetching(state),
         followingInProgress: getFollowingInProgress(state),
     }
 }

//let withRedirect = withAuthRedirect(UsersContainer)


// export default withAuthRedirect (connect(mapStateToProps, {
//     setCurrentPage,
//     getUsersTC,
//     followTC,
//     unFollowTC
// })(UsersContainer))


export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {setCurrentPage, getUsersTC, followTC, unFollowTC})
)
(UsersContainer)