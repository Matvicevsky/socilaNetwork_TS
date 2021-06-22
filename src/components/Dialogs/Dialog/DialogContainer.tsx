import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../../HOC/WithAuthRedirect";
import  {ComponentType} from "react";
import {newMessageActionCreator, onMessageChangeActionCreator} from "../../../Redux/dialogsReducer";


let mapStateToProps = (state: AppReduxStateType) => {
    return {
        title: state.dialogPage.dialogMessage,
        value: state.dialogPage.newDialog,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        newMessage: () => {
            dispatch(newMessageActionCreator())
        },
        onMessageChange: (text: string | undefined) => {
            let action = onMessageChangeActionCreator(text)
           dispatch(action);
        },
        Redirect
    }
}

 export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialog)