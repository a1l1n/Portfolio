import React, { useState } from 'react'; 
import { Tools } from '../../assets/Icons';
import { Cards } from "./Cards/Cards";
import { Filters } from './Filters/Filters';
import works from "../../assets/projects";
import Styles from "./Portfolio.module.css";

export const Portfolio = () => {
  const [filtereds, setFilter] = useState([])

  return (
    <section className={Styles.portfolio_section} id="Proyectos">

        <div className={Styles.portfolio_menu}>

          <div className={Styles.portfolio_card}>
            <div className={Styles.portfolio_inner_card}>
              <h1>Proyectos</h1>
              <Tools />
            </div>
          </div>
          <Filters />
        </div>

        <div className={Styles.portfolio_container_projects}>
            <Cards works={works}/>
        </div>
    </section>
  )
}
