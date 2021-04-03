import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {dialogPageType, profilePageType} from "./Redux/Store";

type AppPropsType = {
    appState: {
        navbar: Array<AppNavbarPropsType>,
        dialogPage: dialogPageType,
        profilePage: profilePageType,
    }
    dispatch: any

}

type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
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
                <Navbar title={props.appState.navbar}/>
                <div className={"content"}>
                    <Route path={props.appState.navbar[0].link}
                           render={() => <Profile title={props.appState.profilePage}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path={props.appState.navbar[1].link}
                           render={() => <Dialogs title={props.appState.dialogPage}
                                                  dispatch={props.dispatch}/>}
                    />
                    <Route path={props.appState.navbar[2].link}
                           render={() => <News/>}/>
                    <Route path={props.appState.navbar[3].link}
                           render={() => <Music/>}/>
                    <Route path={props.appState.navbar[4].link}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
