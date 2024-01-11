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
    <section className={Styles.skills_section} id="Skills">
      <div className={Styles.skills_menu}>
        <div className={Styles.skills_card}>
          <div className={Styles.skills_inner_card}>
            <h1>Skills</h1>
            <SkillsIcon />
          </div>
        </div>

        <div className={Styles.skills_icon_div}>
          <div className={`${Styles.skills_icon} ${Styles.skills_slack}`}><SlackIcon /></div>
          <div className={`${Styles.skills_icon} ${Styles.skills_react}`}><ReactIcon /></div>
          <div className={`${Styles.skills_icon} ${Styles.skills_next}`}><NextIcon /></div> 
        </div>

        <div className={Styles.skills_icon_div}>
          <div className={`${Styles.skills_icon} ${Styles.skills_nest}`}><NestIcon /></div>
          <div className={`${Styles.skills_icon} ${Styles.skills_post}`}><PostgresIcon /></div>
        <div className={`${Styles.skills_icon} ${Styles.skills_figma}`}><FigmaIcon /></div>
        </div>

        <div className={Styles.skills_courses_card}>
          <div className={Styles.skills_courses_title}>
            <h1>Upcoming courses</h1>
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

        <div className={Styles.skills_techs}>
            <Technologies />
        </div>
    </section>
  )
}
