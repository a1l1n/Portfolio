import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import Styles from "./Portfolio.module.css"; 
import works from "../../assets/projects";

export const Cards = () => {
  const [modal, setModal] = useState(0);

  const clickImage = (index) => {
    setModal(index);
  }

  return (
    <div className={Styles.portfolio_content}>
      {
        works?.map(p => (
          
          <div className={Styles.portfolio_group} key={p.id}>
            <h2 className={Styles.portfolio_card_title}>_{p.name}</h2>
            <h3 className={Styles.portfolio_type}>: : : {p.type} : : :</h3>
            <img src={p.image} alt={p.name} className={Styles.portfolio_img} onClick={()=> clickImage(p.id)}/>
 
              <div className={Styles.portfolio_info}>
                <a href={p.code} target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
                {
                  p.demo === "Coming soon" ? <span className={Styles.portfolio_demo}>: : Soon : :</span> 
                  : <a  href={p.demo} target="_blank" className={Styles.portfolio_demo}>Demo <AiOutlineArrowRight className={Styles.portfolio_info_icon}/></a>
                }
              </div>

              <div className={modal === p.id ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
                <div className={Styles.portfolio_modal_overlay} onClick={() => clickImage(0)}></div> 
                <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={() => clickImage(0)}/>

                <div className={Styles.portfolio_modal_content}>
                  <div className={Styles.portfolio_modal_image}>
                    <img src={p.modelImage} className={Styles.portfolio_modal_img} />
                  </div>
                  <div className={Styles.portfolio_modal_info}>
                    <h4>Stack tecnológico: {p.tech}</h4>
                    <p>Descripción: {p.description}</p>
                  </div>
                </div> 
              </div>
          </div>
        ))
      }
    </div>
  )
}
