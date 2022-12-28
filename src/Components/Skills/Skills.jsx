import React from 'react';
import { Back } from './Back';
import { Front } from './Front';
import Styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={Styles.skills_section} id="skills">
        <h2 className={Styles.skills_title_gral}>Skills</h2>
        <h3 className={Styles.skills_subtitle_gral}>Habilidades Técnicas</h3>
        
        <div className={Styles.skills_container_grid}>
            <Back />
            <Front />
        </div>
    </section>
  )
}
