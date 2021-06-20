import React from 'react';
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


export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}


function App() {
    return (
        <div className="App-wrapper">
            <HeaderContainer/>
            <div className={"body"}>
                <NavbarContainer/>
                <div className={"content"}>
                    <Route path={"/profile/:userId?"}
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
                           render={() => <LoginFormik />}/>

                </div>
            </div>
        </div>
    );
}

export default App;
