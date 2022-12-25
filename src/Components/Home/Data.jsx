import React from 'react';
import { AiOutlineSend } from "react-icons/ai";
import Styles from "./Home.module.css";

export const Data = () => {
  return (
    <div className={Styles.home_data}>
        <h1 className={Styles.home_title}>Ailin Tobares</h1>
        <div className={Styles.home_subtitle}>
            <h3>Full Stack Developer</h3>
        </div>
        <p className={Styles.home_presentation}>Hola, te saluda una entusiasta Desarrolladora Web orientada al Front-End. Si mi perfil te interesa... </p>
        
        <div  className={Styles.home_button}>
            <a href="#contact" className={Styles.home_button_a}>
                Escribime
                <AiOutlineSend className={Styles.home_button_icon}/>
            </a>
        </div>
    </div>
  )
}
