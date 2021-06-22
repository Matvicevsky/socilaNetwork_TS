import React, {ComponentType} from 'react';
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import FindUsersContainer from "./components/find-users/FindUsersContainer";
import ProfileContainerClass from "./components/Profile/ProfileContainerClass";
import HeaderContainer from "./components/Navbar/HeaderContainer";
import LoginFormik from "./components/Login/LoginFormik";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeAppTC} from "./Redux/appReducer";
import {AppReduxStateType} from "./Redux/ReduxStore";
import {Preloader} from "./common/Preloader/Preloader";
import {setUserDataTC} from "./Redux/authReducer";


export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}

type MapDispatchPropsType = {
    initializeAppTC: () => void
    setUserDataTC: () => void
}
type MapStateToPropsType = {
    initialized: boolean
    userId: number
}

class App extends React.Component<MapDispatchPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
            return (
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <div className={"body"}>
                        <NavbarContainer/>
                        <div className={"content"}>
                            <Route path={`/profile/:userId?`}
                                   render={() =>
                                       <ProfileContainerClass/>}/>
                            <Route path={"/dialogs"}
                                   render={() =>
                                       <Dialogs/>}
                            />
                            <Route path={"/users"}
                                   render={() => <FindUsersContainer/>}/>
                            <Route path={"/news"}
                                   render={() => <News/>}/>
                            <Route path={"/music"}
                                   render={() => <Music/>}/>
                            <Route path={"/settings"}
                                   render={() => <Settings/>}/>
                            <Route path={"/login"}
                                   render={() => <LoginFormik/>}/>

                        </div>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state: AppReduxStateType) => ({
    initialized: state.app.initialized,
    userId: state.auth.userId
})


export default compose<ComponentType>(
    connect(mapStateToProps, {initializeAppTC, setUserDataTC}),
)(App);
