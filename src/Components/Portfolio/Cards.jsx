import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import Guitar from "../../assets/Guitar2.jpg";
import Funky from "../../assets/FunkyTravel.png";
import Video from "../../assets/Movies.png";
import Weather from "../../assets/Weather.png";
import modelGuitar from "../../assets/modelGuitar.png";
import modelFunky from "../../assets/modelFunky.png";
import modelVideo from "../../assets/modelVideo.png";
import modelSailor from "../../assets/modelSailor.png";
import Styles from "./Portfolio.module.css"; 

export const Cards = () => {
  const [modal, setModal] = useState(0);

  const clickImage = (index) => {
    console.log("Entramos a clickImage");
    setModal(index);
  }

  return (
    <div className={Styles.portfolio_content}>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Guitar Code </h2>
        <img src={Guitar} alt="Guitar_Code" className={Styles.portfolio_img} onClick={()=> clickImage(1)}/>

        <div>
          <h3 className={Styles.portfolio_type}>: : : Full Stack </h3>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/djaroldito/e-guitar-REACT" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
            <a  href="https://e-guitar-react.vercel.app/" target="_blank" className={Styles.portfolio_demo}>Demo <AiOutlineArrowRight className={Styles.portfolio_info_icon}/></a>
          </div>
          
            <div className={setModal === 1 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
               <div className={Styles.portfolio_modal_overlay} onClick={() => clickImage(0)}></div> 
              <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={() => clickImage(0)}/>
                <div className={Styles.portfolio_modal_content}>
                  <img src={modelGuitar} className={Styles.portfolio_modal_img} />
                  </div>
            </div>
          

        </div>

      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Funky Travel</h2>
        <img src={Funky} alt="Funky_Tavel" className={Styles.portfolio_img} onClick={()=> clickImage(2)}/>

        <div>
          <h3 className={Styles.portfolio_type}>: : : Full Stack</h3>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/a1l1n/Funky-Travel" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>

            <div className={setModal === 2 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
{/*               <div className={Styles.portfolio_modal_overlay} onClick={()=> clickImage(0)}></div> */}
              <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={()=> clickImage(0)}/>
                <div className={Styles.portfolio_modal_content}>
                  <img src={modelFunky} className={Styles.portfolio_modal_img} />
                </div>
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

{/*       <div className={Styles.portfolio_modal}>
        <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} />
        <div className={Styles.portfolio_modal_content}>
          <img src={Video} className={Styles.portfolio_modal_img} />
          <span className={Styles.porftolio_modal_text}>Hello</span>
        </div>
      </div> */}

    </div>
  )
}
