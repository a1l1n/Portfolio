import React from 'react';
import { AiOutlineGithub, AiOutlineArrowRight } from "react-icons/ai";
import Styles from './Cards.module.css'

export const Cards = ({ works }) => {

  return (
    <div className={Styles.cards_container}>
      {
        works?.map((p) => (
          <div className={`${Styles.card} ${p.id % 2 === 0 ? null : Styles.card_par}`}>

            <div className={Styles.card_content_front} key={p.id}>
              <h2>_{p.name}</h2>
              <img src={p.image} alt={p.name} className={Styles.card_img}/>

              <div className={
                `${Styles.card_type} ${p.type === 'Full-Stack' ? Styles.card_type_fullstack : p.type === 'Front-End' ? Styles.card_type_front : Styles.type_back}`
              }>
                <h3>{p.type}</h3>
              </div>
            </div>

            <div className={Styles.card_content_back}>
              <div className={`${Styles.card_back_title} ${p.type === 'Full-Stack' ? Styles.card_type_fullstack : p.type === 'Front-End' ? Styles.card_type_front : Styles.type_back}`}>Tecnologías</div>

              <div className={Styles.card_tech}>
                {
                  p.tech.map((techItem, index) => (
                    <div key={index}>
                      
                      <div><h4>{techItem.title}</h4> {techItem.description}</div>
                    </div>
                ))
                }
              </div>

              <div className={Styles.card_links}>
                <a href={p.code} target="_blank"> <AiOutlineGithub className={Styles.card_links_icons} />Código</a>
                {
                  p.demo === 'Coming soon' ?
                  <p>Pronto</p>
                  :
                  <a href={p.demo} target="_blank">Demo <AiOutlineArrowRight className={Styles.card_links_icons}/></a>
                }
              </div>
            </div>

          </div>
          
        ))
      }
    </div>
  )
}
