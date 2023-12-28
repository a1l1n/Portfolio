import React, { useState } from 'react';
import { BsCircleFill } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc"
import { AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFileDone, 
  AiOutlinePicture, 
  AiOutlineSend, 
  AiOutlineClose, 
  AiOutlineAppstore } from "react-icons/ai";
import Styles from "./NavBar.module.css";

export const NavBar = () => {
    const [ Toggle, showMenu ] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(0);
    const items = ['Principal', 'Proyectos', 'Sobre mí', 'Habilidades', 'Contacto'];

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
                    {index === 1 && <AiOutlinePicture className={Styles.nav_menu_icon} />}
                    {index === 2 && <AiOutlineUser className={Styles.nav_menu_icon} />}
                    {index === 3 && <AiOutlineFileDone className={Styles.nav_menu_icon}/>}
                    {index === 4 && <AiOutlineSend className={Styles.nav_menu_icon} />}
                    {item}
                  </a>
                </li>
             ))}   
                <li className={Styles.nav_menu_mode}>
                  <VscColorMode className={Styles.nav_menu_icon} />
                  Modo
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
