import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {AllProfileReducerActionType, profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {AllFindUsersActionCreatorType, findUsersReducer} from "./findUsersReducer";
import {AllAuthReducerActionType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {AllAppReducerActionType, appReducer} from "./appReducer";

export type AppReduxStateType = ReturnType<typeof rootReducer>
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer
});



export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionType = AllFindUsersActionCreatorType | AllAuthReducerActionType | AllProfileReducerActionType | AllAppReducerActionType


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppReduxStateType, unknown, AppActionType>
//@ts-ignore
window.store = store