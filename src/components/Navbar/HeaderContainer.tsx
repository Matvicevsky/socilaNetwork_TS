import React from 'react';
import {Header} from "../Header/Header";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {captchaTC, logOutTC} from "../../Redux/authReducer";

export type HeaderContainerPropsType = MapStatePropsType & mapDispatchToPropsType

type MapStatePropsType = {
    isAuth: boolean,
    login: any
}
type mapDispatchToPropsType = {
    logOutTC: () => void
    captchaTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    render() {
        return (
            <Header {...this.props}/>
        );
    }


}

const mapStateToProps = (state: AppReduxStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { logOutTC, captchaTC})(HeaderContainer)