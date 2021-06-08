import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addLikePost, addPost, setUserProfile, updateNewPostText} from "../../Redux/profileReducer";
import {AppReduxStateType} from "../../Redux/ReduxStore";
import {withRouter, RouteComponentProps} from "react-router-dom";



type onPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void,
    addPost: () => void,
    updateNewPostText: (text: string | undefined) => void,
    addLikePost: ( id: string, count: number) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & onPropsType


class ProfileContainerClass extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId ?? 16115
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainerClass);

export default connect(mapStateToProps,
    {setUserProfile, addPost, updateNewPostText, addLikePost})(withUrlDataContainerComponent);