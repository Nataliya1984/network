import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {store, StoreType} from "./components/redux/state";
import {Settings} from "./components/Settings/Settings";
//import {Settings} from "./components/Settings/Settings";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile store={props.store}
                        //  state={state.profilePage}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // newPostText={state.profilePage.newPostText}
                    />}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        store={props.store}
                        // state={state.dialogsPage}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // newMessagText={state.dialogsPage.newMessagText}
                    />}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


