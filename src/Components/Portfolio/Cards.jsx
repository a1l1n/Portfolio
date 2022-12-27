import React from 'react';
import { AiOutlineGithub, AiOutlineArrowRight } from "react-icons/ai";
import Guitar from "../../assets/Guitar2.jpg";
import Funky from "../../assets/FunkyTravel.png";
import Video from "../../assets/Movies.png";
import Weather from "../../assets/Weather.png";
import Styles from "./Portfolio.module.css";

export const Cards = () => {
  return (
    <div className={Styles.portfolio_content}>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Guitar Code </h2>
        <img src={Guitar} alt="Guitar_Code" className={Styles.portfolio_img}/>

        <div>
          <h3 className={Styles.portfolio_type}>: : : Full Stack </h3>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/djaroldito/e-guitar-REACT" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
            <a  href="https://e-guitar-react.vercel.app/" target="_blank" className={Styles.portfolio_demo}>Demo <AiOutlineArrowRight className={Styles.portfolio_info_icon}/></a>
          </div>
        </div>

      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Funky Travel</h2>
        <img src={Funky} alt="Guitar_Code" className={Styles.portfolio_img}/>

        <div>
          <h3 className={Styles.portfolio_type}>: : : Full Stack</h3>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/a1l1n/Funky-Travel" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>
        </div>

      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Video Check</h2>
        <img src={Video} alt="Guitar_Code" className={Styles.portfolio_img}/>

        <div>
          <h3 className={Styles.portfolio_type}>: : : Front-End</h3>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/a1l1n/Movies-App" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>
        </div>
      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Sailor Weather App</h2>
        <img src={Weather} alt="Guitar_Code" className={Styles.portfolio_img} />

        <div>
          <h3 className={Styles.portfolio_type}>: : : Front-End</h3>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/a1l1n/Sailor-Weather-App" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}
