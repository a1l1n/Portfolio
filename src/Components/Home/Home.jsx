import React from 'react';
import { Data } from './Data/Data';
import { Stickers } from './Stickers/Stickers';

import Style from "./Home.module.css";

export const Home = () => {
  return (
    <section className={Style.home_section} id="Home">
       <div className={Style.home_container}>
           <Stickers className={Style.stickers} />
           <Data className={Style.data} />
       </div>
    </section>
  )
}
