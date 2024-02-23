import React from 'react';
import { AiOutlineSend, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Profile from '../../../assets/Profile2.jpeg'
import Styles from './Data.module.css'
import { Duck, Bug } from '../../../assets/Icons';


export const Data = () => {
  return (
    <div className={Styles.data_container}>
      <div className={Styles.data_box}>

        <div className={Styles.data_head}>
          <div className={Styles.data_profile_image}>
            <img src={Profile} alt='Profile image' className={Styles.data_image}/>
            <div className={Styles.data_duck}>
              <Duck />
            </div>
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
            Hello, greetings from a Web Development enthusiast. Come in and take a look at my projects. If my profile interests you, I invite you to
            </p>
          </div>
        </div>

        <div className={Styles.data_button}>
          <a href="#Contact" className={Styles.data_button_a}>
              Contact Me
              <AiOutlineSend className={Styles.data_button_icon}/>
            </a>
        </div>
            <div className={Styles.data_bug}>
              <Bug />
            </div>
      </div>
    </div>
  )
}
