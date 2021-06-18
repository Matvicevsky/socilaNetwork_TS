import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {addLikePost, addPost, setUserProfileTC, updateNewPostText} from "../../Redux/profileReducer";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


type onPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: any,
}

type MapDispatchPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string | undefined) => void,
    addLikePost: ( id: string, count: number) => void,
    setUserProfileTC: (userId: string) => void
    Redirect: typeof Redirect
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & onPropsType


class ProfileContainerClass extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfileTC(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps,
        { addPost, updateNewPostText, addLikePost, setUserProfileTC,Redirect}),
    WithAuthRedirect,
    withRouter,

)(ProfileContainerClass)