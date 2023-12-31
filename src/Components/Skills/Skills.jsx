import React from 'react';
import Styles from "./Skills.module.css";

import { Check, 
  SkillsIcon, 
  SlackIcon, 
  ReactIcon, 
  NextIcon, 
  NestIcon, 
  FigmaIcon, 
  PostgresIcon } from '../../assets/Icons';
import { Technologies } from './Technologies/Technologies';

export const Skills = () => {
  return (
    <section className={Styles.skills_section} id="Habilidades">
      <div className={Styles.skills_menu}>
        <div className={Styles.skills_card}>
          <div className={Styles.skills_inner_card}>
            <h1>Habilidades Técnicas</h1>
            <SkillsIcon />
          </div>
        </div>

          <SlackIcon />
          <ReactIcon />
          <NextIcon />
        <div className={Styles.skills_courses_card}>
          <div className={Styles.skills_courses_title}>
            <h1>Próximos cursos</h1>
          </div>
          <div className={Styles.courses_items}>  
            <Check /><a href='https://www.udemy.com/course/python-total/' 
            target='_blank'>Python</a>
          </div>
          <div className={Styles.courses_items}>
            <Check /><a href='https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/' 
            target='_blank'>
              React Native
            </a>
          </div>
          <div className={Styles.courses_items}>
            <Check /><a href='https://www.udemy.com/course/deep-learning-desde-cero-en-python/' 
            target='_blank'>
              Inteligencia Artificial y Deep Learning desde cero en Python
            </a>
          </div>
        </div>
      </div>
        <NestIcon />
        <PostgresIcon />
        <FigmaIcon />
        <div className={Styles.skills_techs}>
            <Technologies />
        </div>
    </section>
  )
}
