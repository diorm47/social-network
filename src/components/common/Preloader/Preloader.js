import React from "react";
import preloaderGif from "../../../assets/gifs/preloader.gif";
import "./preloader.css"

let Preloader = (props) => {
    return <div className='preloader'>
        <img alt="preloader" src={preloaderGif} />
    </div>
}

export default Preloader;