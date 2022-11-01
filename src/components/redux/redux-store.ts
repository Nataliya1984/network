import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export const rootReducerType = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
});

 export const store = createStore(rootReducerType);


export type AppStateType = ReturnType<typeof rootReducerType>

// @ts-ignore
window.store = store