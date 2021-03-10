import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {v1} from "uuid";

function App() {

    let [navbar, setNavbar] = useState([
        {id: v1(), title: "Profile"},
        {id: v1(), title: "Messages"},
        {id: v1(), title: "News"},
        {id: v1(), title: "Music"},
        {id: v1(), title: "Settings"}
    ]);
    return (
        <div className="App-wrapper">
            <Header/>
            <div className={"body"}>
                <Navbar title={navbar}/>
                <div className={"content"}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
