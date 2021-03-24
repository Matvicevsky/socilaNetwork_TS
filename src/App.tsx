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

type AppPropsType = {
    appState: {
        navbar: Array<AppNavbarPropsType>,
        contactsMessage: Array<AppContactsMessagePropsType>,
        PostMessages: Array<PostMessagesPropsType>,
        newPostText: string | undefined
        dialogMessage: Array<string>
        newDialog: string
    }
    dispatch: any

}

type AppNavbarPropsType = {
    id: string,
    title: string,
    link: string
}

type AppContactsMessagePropsType = {
    id: string,
    avatar: string,
    title: string,
    nicName: string,
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
                           render={() => <Profile title={props.appState.PostMessages}
                                                  dispatch={props.dispatch}
                                                  newPostText={props.appState.newPostText}/>}/>
                    <Route path={props.appState.navbar[1].link}
                           render={() => <Dialogs title={props.appState}
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
