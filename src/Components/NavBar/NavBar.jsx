import React, { useState } from 'react';
import { BsCircleFill, BsBriefcase } from "react-icons/bs";
import { AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFileDone, 
  AiOutlinePicture, 
  AiOutlineSend, 
  AiOutlineClose, 
  AiOutlineAppstore } from "react-icons/ai";
import { CvIcon } from '../../assets/Icons';
import CV from '../../assets/Data/Tobares Ailin - Frontend CV - February 2024.pdf'
import Styles from "./NavBar.module.css";

export const NavBar = () => {
    const [ Toggle, showMenu ] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(0);
    const items = ['Home', 'Experience' ,'Projects', 'About Me', 'Skills', 'Contact'];

    const activate = (index) => {
        setSelectedItem(index);
    };

  return (
    <header className={`${Styles.header} ${Styles.fixedBottom}`}>
        <nav className={Styles.nav}>
            {
              !Toggle ? 
              <div className={Styles.nav_logo}>
                <BsCircleFill className={Styles.nav_logo_icon} />
                Portfolio
              </div>
              :
              null 
            }
       <div className={Toggle ? Styles.nav_menu : Styles.show_menu }>
       
            <ul className={Toggle ? Styles.nav_menu_grid : Styles.nav_container}>
            {items.map((item, index) => (
                <li
                key={index}
                className={`${Styles.nav_menu_item} ${selectedItem ==   index ? Styles.nav_menu_active : ''}`}
                onClick={() => activate(index)}
                >
                  <a href={`#${item}`} className={Styles.nav_menu_link}>
                    {index === 0 && <AiOutlineHome className={Styles.nav_menu_icon} />}
                    {index === 1 && <BsBriefcase className={Styles.nav_menu_icon} />}
                    {index === 2 && <AiOutlinePicture className={Styles.nav_menu_icon} />}
                    {index === 3 && <AiOutlineUser className={Styles.nav_menu_icon} />}
                    {index === 4 && <AiOutlineFileDone className={Styles.nav_menu_icon}/>}
                    {index === 5 && <AiOutlineSend className={Styles.nav_menu_icon}/>}
                    {item}
                  </a>
                </li>
             ))}   
                <li className={Styles.nav_menu_item}>
                  <a download="" href={CV} className={Styles.nav_menu_link}><CvIcon/>CV</a>
                </li>
            </ul>
       </div>            
            <div id='bottom-navbar-indicator' className={ `${Styles.indicator} ${Styles[`indicator-${selectedItem}`]}` }></div>
            
            <div>
            <AiOutlineClose className={Toggle ? Styles.nav_close : Styles.nav_close_inactive} onClick={() => showMenu(!Toggle)}/>
            </div>
            
            <div className={Styles.nav_toggle} onClick={() => showMenu(!Toggle)}>
            <AiOutlineAppstore />
            </div>

        </nav>
    </header>
  )
}
