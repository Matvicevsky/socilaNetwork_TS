import React from "react";
import {v1} from "uuid";




export let state = {
    //for navbar
    navbar: [
        {id: v1(), title: "Profile", link: "/profile"},
        {id: v1(), title: "Messages", link: "/dialogs"},
        {id: v1(), title: "News", link: "/news"},
        {id: v1(), title: "Music", link: "/music"},
        {id: v1(), title: "Settings", link: "/settings"}
    ],
    //for dialog
    contactsMessage: [
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
    ],
    // for profile>post
    PostMessages: [
        {id: v1(), avatar: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-trinity-512.png" , nicName: "Trinitttttti", message: "How are yuo", count: 42},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mr.Smith", message: "I am kill yor", count: 422},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mrrrrr.Smith", message: "I am kill yor", count: 422},
        {id: v1(), avatar: "https://icons.iconarchive.com/icons/mattahan/ultrabuuf/256/TV-Smith-icon.png" , nicName: "Mr.Smith", message: "I am kill yor", count: 422},
    ]
}

