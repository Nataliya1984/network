import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export const ReduxReducerType = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:sidebarReducer
});

 export const store = createStore(ReduxReducerType);


export type ReduxReducerType = ReturnType<typeof ReduxReducerType>

// @ts-ignore
window.store = store