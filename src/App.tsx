import React, {lazy, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ErrorSnackbarContainer from "./common/ErrorSnackbar/ErrorSnackbarContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializedTC} from "./components/redux/app-reducer";
import {AppStateType} from "./components/redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
// 'ленивая загрузка'
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const Login = lazy(() => import('./components/Login/Login'));
const UsersContainer = lazy(() => import('./Users/UsersContainer'));
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));




//1(80).делаем классовую компоненту арр
// ctrl+alt+shift+t (выбираем convert to class component) (заменяем функуиональную компоненту на классовую)
// 2(переносим сюда me запрос)
// 3 оборачиваем withRoure

type MapDispatchPropsType = {
    setInitializedTC: () => void
}

type MapStatePropsType = {
    initialized: boolean
}

class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {

    // делаем me запрос в АРР
    componentDidMount() {
        this.props.setInitializedTC()
        //     authApi.me()
        //         .then((data) => {
        //             if (data.resultCode === 0) {
        //                 let {id, email, login} = data.data
        //                 this.props.setAuthUserDataAC({id, email, login})
        //             }
        //         })

    }

    render() {
        //возвращаем разметку после того, как проинициализировались
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (


            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path='/login/' element={<Login/>}/>
                            <Route path='/dialogs/'
                                   element={<DialogsContainer/>}/>
                            <Route path='/users/' element={<UsersContainer/>}/>
                            <Route path='/news/' element={<News/>}/>
                            <Route path='/music/' element={<Music/>}/>
                            <Route path='/settings/' element={<Settings/>}/>
                        </Routes>
                    </Suspense>
                    <ErrorSnackbarContainer/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        setInitializedTC
    }))(App);




