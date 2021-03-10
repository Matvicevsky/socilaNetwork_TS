import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <div className={"body"}>
                <Navbar/>
                <div className={"content"}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
