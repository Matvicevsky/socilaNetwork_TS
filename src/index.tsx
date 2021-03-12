import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

//for navbar
let navbar = [
    {id: v1(), title: "Profile", link: "/profile"},
    {id: v1(), title: "Messages", link: "/dialogs"},
    {id: v1(), title: "News", link: "/news"},
    {id: v1(), title: "Music", link: "/music"},
    {id: v1(), title: "Settings", link: "/settings"}
];
//for dialog
let contactsMessage = [
    {
        id: v1(),
        nicName: "Neo",
        avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png",
        link: "/dialogs/neo",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
    },
    {
        id: v1(),
        nicName: "Morphius",
        avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png",
        link: "/dialogs/morphius",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
    },
    {
        id: v1(),
        nicName: "Triniti",
        avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png",
        link: "/dialogs/triniti",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
    },
    {
        id: v1(),
        nicName: "Mr.Smith",
        avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png",
        link: "/dialogs/mr.smith",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eligendi facere id"
    }
];

ReactDOM.render(

  <React.StrictMode>
    <App navbar={navbar} contacts={contactsMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
