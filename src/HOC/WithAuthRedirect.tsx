import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppReduxStateType} from "../Redux/ReduxStore";

type MapStatePropsType = {
    isAuth: boolean
}


const mapStateToProps = (state: AppReduxStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function WithAuthRedirect<T>( Component: React.ComponentType<T> )  {

    const RedirectComponent: React.FC<MapStatePropsType> = (props) => {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as unknown as T} />
}

let ConnectedRedirectComponent = connect<MapStatePropsType, {}, T, AppReduxStateType>(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}

