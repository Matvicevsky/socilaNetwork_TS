import React from "react";
import preLoader from "../../assets/images/preloader.svg";
import preloader from "./Preloader.module.css"


export function Preloader () {
    return (
        <div>
            <img className={preloader.preloader}
                                     src={preLoader}
                                     alt={'preloader'}/>
        </div>
    )


}