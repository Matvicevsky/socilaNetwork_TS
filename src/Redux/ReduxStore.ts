import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {findUsersReducer} from "./findUsersReducer";

export type AppReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: findUsersReducer
});

export let store: Store = createStore(rootReducer);

