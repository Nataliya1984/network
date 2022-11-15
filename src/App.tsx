import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import ErrorSnackbarContainer from "./common/ErrorSnackbar/ErrorSnackbarContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializedTC} from "./components/redux/app-reducer";
import {AppStateType} from "./components/redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";



//1(80).делаем классовую компоненту арр
// ctrl+alt+shift+t (выбираем convert to class component) (заменяем функуиональную компоненту на классовую)
// 2(переносим сюда me запрос)
// 3 оборачиваем withRoure

 type MapDispatchPropsType = {
     setInitializedTC:()=>void
}

type MapStatePropsType={
     initialized:boolean
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
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path='/login/' element={<Login/>}/>
                        <Route path='/dialogs/' element={<DialogsContainer/>}/>
                        <Route path='/users/' element={<UsersContainer/>}/>
                        <Route path='/news/' element={<News/>}/>
                        <Route path='/music/' element={<Music/>}/>
                        <Route path='/settings/' element={<Settings/>}/>
                    </Routes>
                    <ErrorSnackbarContainer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state:AppStateType):MapStatePropsType=>{
     return{
         initialized: state.app.initialized
     }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        setInitializedTC
}))(App);

