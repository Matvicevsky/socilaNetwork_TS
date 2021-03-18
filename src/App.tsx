import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
    appState: {
        navbar: Array<AppNavbarPropsType>,
        contactsMessage: Array<AppContactsMessagePropsType>,
        PostMessages: Array<PostMessagesPropsType>
    }
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

    let DialogProps = () => <Dialogs title={props.appState.contactsMessage}/>
    let ProfileProps = () => <Profile title={props.appState.PostMessages}/>


    return (
            <div className="App-wrapper">
                <Header/>
                <div className={"body"}>
                    <Navbar title={props.appState.navbar}/>
                    <div className={"content"}>
                        <Route path={props.appState.navbar[0].link} component={ProfileProps}/>
                        <Route path={props.appState.navbar[1].link} component={DialogProps}/>
                        <Route path={props.appState.navbar[2].link} component={News}/>
                        <Route path={props.appState.navbar[3].link} component={Music}/>
                        <Route path={props.appState.navbar[4].link} component={Settings}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
