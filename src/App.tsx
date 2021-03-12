import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {v1} from "uuid";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

function App() {

    let [navbar, setNavbar] = useState([
        {id: v1(), title: "Profile", link: "/profile"},
        {id: v1(), title: "Messages", link: "/dialogs"},
        {id: v1(), title: "News", link: "/news"},
        {id: v1(), title: "Music", link: "/music"},
        {id: v1(), title: "Settings", link: "/settings"}
    ]);
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <div className={"body"}>
                    <Navbar title={navbar}/>
                    <div className={"content"}>
                        <Route path={navbar[0].link} component={Profile}/>
                        <Route path={navbar[1].link} component={Dialogs}/>
                        <Route path={navbar[2].link} component={News}/>
                        <Route path={navbar[3].link} component={Music}/>
                        <Route path={navbar[4].link} component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
