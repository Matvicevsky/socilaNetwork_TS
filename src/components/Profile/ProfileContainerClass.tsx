import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    addLikePost,
    addPost,
    getStatusTC, ProfileType,
    setUserProfileTC,
    updateNewPostText,
    updateStatusTC
} from "../../Redux/profileReducer";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {setUserIdTC} from "../../Redux/authReducer";


export type onPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType | null,
    status: string | null
    myId : number
}

type MapDispatchPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string | undefined) => void,
    addLikePost: (id: string, count: number) => void,
    setUserProfileTC: (userId: string | number) => void
    Redirect: typeof Redirect
    getStatusTC: (status: string | number) => void
    updateStatusTC: (status: string | null) => void
    setUserId: () => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & onPropsType


class ProfileContainerClass extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId

        this.props.setUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppReduxStateType): MapStatePropsType => ( {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId

})

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getStatusTC, updateStatusTC, addPost, updateNewPostText, addLikePost, setUserProfileTC, setUserId: setUserIdTC, Redirect}),
    withRouter,
)(ProfileContainerClass)