import React from 'react';
import {Header} from "../Header/Header";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {setUserDataTC} from "../../Redux/authReducer";

export type HeaderContainerPropsType = MapStatePropsType & mapDispatchToPropsType

type MapStatePropsType ={
    isFetching: boolean,
    login: any
}
type mapDispatchToPropsType = {
    setUserDataTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserDataTC()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }


}

const mapStateToProps = (state: AppReduxStateType) => ({
    isFetching: state.auth.isFetching,
    login: state.auth.login
})

export default connect(mapStateToProps, { setUserDataTC})(HeaderContainer)