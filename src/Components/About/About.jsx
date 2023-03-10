import React from 'react';
import Image from "../../assets/Profile3.png";
import { Info } from './Info';
import { FaRegFilePdf } from "react-icons/fa";
import CV from "../../assets/CV-Tobares Ailin.pdf"
import Styles from "./About.module.css";

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
                <p className={Styles.about_description}>Soy de Buenos Aires, Argentina. Desarrolladora Full Stack con orientación en el Front End. Manejo tecnologías PERN. Me gusta incluir el diseño UI en mis proyectos así como metodologías ágiles de trabajo (SCRUM). </p>
                <div className={Styles.about_button}>
                    <a download="" href={CV} className={Styles.about_button_a}>Download CV <FaRegFilePdf className={Styles.about_button_icon}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}
