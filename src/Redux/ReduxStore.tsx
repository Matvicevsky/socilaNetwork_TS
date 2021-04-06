import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";

export type AppReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbar: navbarReducer,
});

export let store: Store = createStore(rootReducer);

