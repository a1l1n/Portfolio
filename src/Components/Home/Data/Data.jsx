import React from 'react';
import { AiOutlineSend, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Profile from '../../../assets/Profile2.jpeg'
import Styles from './Data.module.css'

export const Data = () => {
  return (
    <div className={Styles.data_container}>
      <div className={Styles.data_box}>

        <div className={Styles.data_head}>
          <div className={Styles.data_profile_image}>
            <img src={Profile} alt='Profile image' className={Styles.data_image}/>
          </div>

          <div className={Styles.data_title}>
            <div className={Styles.data_yellow}></div>
            <h1>Ailin Tobares</h1>
            <h3>Full Stack Developer</h3>
            <div className={Styles.data_purple}></div>
          </div>
        </div>

        <div className={Styles.data_info}>
          <div className={Styles.data_social}>
          <a href="https://www.instagram.com/" className={Styles.data_social_icon} target="_blank"><AiOutlineInstagram /></a>

          <a href="https://github.com/a1l1n" className={Styles.data_social_icon} target="_blank"><AiOutlineGithub /></a> 

          <a href="https://www.linkedin.com/in/ailin-tobares-b6251220b/" className={Styles.data_social_icon} target="_blank"><AiOutlineLinkedin /></a> 
          </div>

          <div className={Styles.data_description}>
            <p>
            Hola, te saluda una entusiasta del Desarrollo Web. Pasá y mirá mis proyectos y si mi perfil te interesa te invito a
            </p>
          </div>
        </div>

        <div className={Styles.data_button}>
          <a href="#contact" className={Styles.data_button_a}>
              Escribirme
              <AiOutlineSend className={Styles.data_button_icon}/>
            </a>
        </div>
      </div>
    </div>
  )
}
