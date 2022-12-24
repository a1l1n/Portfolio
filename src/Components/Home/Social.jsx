import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Style from "./Home.module.css";

export const Social = () => {
  return (
    <div className={Style.home_social}>
      <a href="https://www.instagram.com/" className={Style.home_social_icon} target="_blank"><AiOutlineInstagram /></a>

      <a href="https://github.com/a1l1n" className={Style.home_social_icon} target="_blank"><AiOutlineGithub /></a> 

      <a href="https://www.linkedin.com/in/ailin-tobares-b6251220b/" className={Style.home_social_icon} target="_blank"><AiOutlineLinkedin /></a>      
    </div>
  )
}
