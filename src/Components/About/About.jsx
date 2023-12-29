import React from 'react';
import { 
    Duck,
    Barchart, 
    Kitty, 
    Paint, 
    Star } from '../../assets/Icons'
import { Conection } from './Conection/Conection'
import { PostIts } from './PostIts/PostIts' 
import Styles from "./About.module.css";

export const About = () => {
  return (
    <section className={Styles.about_section} id="Sobre mí">
        <div className={Styles.about_menu}>
            <div className={Styles.about_card}>
            <div className={`${Styles.about_icon} ${Styles.about_star_icon}`}>
                <Star />
            </div>
            <div className={`${Styles.about_icon} ${Styles.about_barchart_icon}`}>
                <Barchart />
            </div>
                <div className={Styles.about_inner_card}>
                    <h1>Sobre Mí</h1>
                    <Duck />
                </div>
            </div>
            <Conection />
            <div className={`${Styles.about_icon} ${Styles.about_kitty_icon}`}>
                <Kitty />
            </div>
            <div className={`${Styles.about_icon} ${Styles.about_paint_icon}`}>
                <Paint />
            </div>
        </div>

        <div className={Styles.about_postits}>
            <PostIts />
        </div>
    </section>
  )
}