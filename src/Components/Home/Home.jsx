import React from 'react';
import Style from "./Home.module.css";
import { Data } from './Data';
import { Social } from './Social';
import { ScrollDown } from './ScrollDown';

export const Home = () => {
  return (
    <section className={Style.home_section} id="home">
       <div className={Style.home_container}>
         <div className={Style.home_content}>
          <Social />
{/*           <div className={Style.home_box_img}>
          </div> */}
          <div className={Style.home_img}></div>

          <Data />
         </div>
         <ScrollDown />
       </div>
    </section>
  )
}
