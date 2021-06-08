import React from 'react';
import {Header} from "../Header/Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {setUserData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer)