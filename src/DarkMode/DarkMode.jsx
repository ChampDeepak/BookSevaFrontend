import React from "react";
import Sun  from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = ()=> {document.querySelector("body").setAttribute("data-theme","dark")}
    const setLightMode = ()=> {document.querySelector("body").setAttribute("data-theme","light")}
    const toggleTheme = (e)=> 
    {
        if(e.target.checked) setDarkMode(); 
        else setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={(e)=> toggleTheme(e)}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} alt="Sun icon" className="w-4 h-4 sun" />
                <img src={Moon} alt="Moon icon" className="w-4 h-4 moon" />
            </label>
        </div>
    );
};

export default DarkMode;
