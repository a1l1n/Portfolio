import React from 'react';
import { Duck } from '../../assets/Icons'
import { Conection } from './Conection/Conection'
import { PostIts } from './PostIts/PostIts' 
import CV from "../../assets/CV-Tobares Ailin.pdf"
import Styles from "./About.module.css";

export const About = () => {
  return (
    <section className={Styles.about_section} id="Sobre mí">
        <div className={Styles.about_menu}>
            <div className={Styles.about_card}>
                <div className={Styles.about_inner_card}>
                    <h1>Sobre Mí</h1>
                    <Duck />
                </div>
            </div>
            <Conection />
        </div>

        <div className={Styles.about_postits}>
            <PostIts />
        </div>
    </section>
  )
}