import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {AllProfileReduserActionType, profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {navbarReducer} from "./navbarReducer";
import {AllFindUsersActionCreatorType, findUsersReducer} from "./findUsersReducer";
import {AllAuthReducerActionType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

export type AppReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: findUsersReducer,
    auth: authReducer
});



export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionType = AllFindUsersActionCreatorType | AllAuthReducerActionType | AllProfileReduserActionType
export type AppThunkType = ThunkAction<void, AppReduxStateType, unknown, AppActionType>
//@ts-ignore
window.store = store