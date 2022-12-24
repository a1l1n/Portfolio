import React from 'react';
import { AiOutlineSend } from "react-icons/ai";
import Styles from "./Home.module.css";

export const Data = () => {
  return (
    <div className={Styles.home_data}>
        <h1 className={Styles.home_title}>Ailin Tobares</h1>
        <h3 className={Styles.home_subtitle}>Full Stack Developer</h3>
        <p className={Styles.home_presentation}>Hola, te saluda una entusiasta Desarrolladora Web argentina orientada especialmente al Front-End. Dedicada al 100% en cualquier proyecto que encaro, me divierte y entusiasma programar e investigar. Si mi perfil te interesa... </p>
        
        <div  className={Styles.home_button}>
            <a href="#contact" className={Styles.home_button_a}>
                Escribime
                <AiOutlineSend className={Styles.home_button_icon}/>
            </a>
        </div>
    </div>
  )
}
