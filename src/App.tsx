import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
    navbar: Array<AppNavbarPropsType>,
    contacts: Array<AppContactsMessagePropsType>,
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


function App(props: AppPropsType ) {

    let DialogProps = () => <Dialogs title={props.contacts}/>


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <div className={"body"}>
                    <Navbar title={props.navbar}/>
                    <div className={"content"}>
                        <Route path={props.navbar[0].link} component={Profile}/>
                        <Route path={props.navbar[1].link} component={DialogProps}/>
                        <Route path={props.navbar[2].link} component={News}/>
                        <Route path={props.navbar[3].link} component={Music}/>
                        <Route path={props.navbar[4].link} component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
