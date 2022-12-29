import React from 'react';
import Styles from "./Footer.module.css";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
      <footer className={Styles.footer}>
          <div className={Styles.footer_container}>
            <h1 className={Styles.footer_title}>Ailin Tobares</h1>

            <ul className={Styles.footer_list}>
                <li>
                    <a href="#about" className={Styles.footer_link}>About</a>
                </li>
                <li>
                    <a href="#skills" className={Styles.footer_link}>Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className={Styles.footer_link}>Proyectos</a>
                </li>
            </ul>

            <div className={Styles.footer_social}>
            <a href="https://www.facebook.com/roque.tobares.9/" className={Styles.footer_social_icon} target="_blank"><AiOutlineFacebook /></a>

            <a href="https://www.instagram.com/ailinpim/" className={Styles.footer_social_icon} target="_blank"><AiOutlineInstagram /></a> 

            <a href="https://www.linkedin.com/in/ailin-tobares-b6251220b/" className={Styles.footer_social_icon} target="_blank"><AiOutlineLinkedin /></a>  
            </div>
          </div>
      </footer>
  )
}
