import React, { useState } from 'react'; 
import { ApiIcon, FlowChart, HtmlIcon, Tools } from '../../assets/Icons';
import { Cards } from "./Cards/Cards";
import { Filters } from './Filters/Filters';
import works from "../../assets/projects";
import Styles from "./Portfolio.module.css";

export const Portfolio = () => {
  const [filtered, setFilter] = useState('Todos')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  return (
    <section className={Styles.portfolio_section} id="Proyectos">

        <div className={Styles.portfolio_menu}>
          <div className={Styles.portfolio_card}>
          <div className={Styles.portfolio_icon_html}>
            <HtmlIcon />
          </div>
          <div className={Styles.portfolio_icon_flow}>
            <FlowChart />
          </div>
          <div className={Styles.portfolio_icon_api}>
            <ApiIcon />
          </div>
            <div className={Styles.portfolio_inner_card}>
              <h1>Proyectos</h1>
              <Tools />
            </div>
          </div>
          <Filters selectedFilter={filtered} onFilterChange={handleFilterChange} />
        </div>

        <div className={Styles.portfolio_container_projects}>
            <Cards works={works} selectedFilter={filtered}/>
        </div>
    </section>
  )
}
