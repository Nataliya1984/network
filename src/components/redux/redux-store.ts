import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export const reduxReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:sidebarReducer
});

export const store = createStore(reduxReducer);


export type reduxReducerType = ReturnType<typeof reduxReducer>

// @ts-ignore
window.store = store