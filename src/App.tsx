import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";

type AppPropsType = {

}

export type PostMessagesPropsType = {
    id: string,
    avatar: string,
    nicName: string,
    message: string,
    count: number
}




function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">
            <Header/>
            <div className={"body"}>
                <NavbarContainer/>
                <div className={"content"}>
                    <Route path={"/profile"}
                           render={() =>
                               <Profile/>}/>
                    <Route path={"/dialogs"}
                           render={() =>
                               <Dialogs />}
                    />
                    <Route path={"/news"}
                           render={() => <News/>}/>
                    <Route path={"/music"}
                           render={() => <Music/>}/>
                    <Route path={"/settings"}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
