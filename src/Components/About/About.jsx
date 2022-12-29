import React from 'react';
import Image from "../../assets/Profile3.png";
import { Info } from './Info';
import { FaRegFilePdf } from "react-icons/fa";
import CV from "../../assets/CV-Tobares Ailin.pdf"
import Styles from "./About.module.css";
/* Soy Ailin, desarrolladora web fullstack con inclinacion al Frontend, maneji tecnologias PERN y me gusta incluir el estudio del diseño UI en mis proyectos. */

export const About = () => {
  return (
    <section className={Styles.about_section} id="about">
        <div className={Styles.about_title_section}>
            <h2 className={Styles.section_title}>Sobre Mí</h2>
        </div>
    
        <div className={Styles.about_container}>
            <img src={Image} alt="" className={Styles.about_image}/>
            <div className={Styles.about_data}>
                <Info />
                <p className={Styles.about_description}>Soy de Buenos Aires, Argentina. Desarrolladora Full Stack con inclinación al Front End, manejo tecnologías PERN. Me gusta incluir el diseño UI en mis proyectos. </p>
                <div className={Styles.about_button}>
                    <a download="" href={CV} className={Styles.about_button_a}>Download CV <FaRegFilePdf className={Styles.about_button_icon}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}
