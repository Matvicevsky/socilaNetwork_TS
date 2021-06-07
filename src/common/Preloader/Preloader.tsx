import React from "react";
import users from "../../components/find-users/FindUsers.module.css";
import preLoader from "../../assets/images/preloader.svg";


export function Preloader () {
    return (
        <div>
            <img className={users.preloader}
                                     src={preLoader}
                                     alt={'preloader'}/>
        </div>
    )


}