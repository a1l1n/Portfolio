import React from 'react';
import { Code, Coffee, Cloud, Screen, Screens, Rocket} from '../../../assets/Icons'
import Styles from './Stickers.module.css'

export const Stickers = () => {
  
  const icons = [<Coffee />, <Rocket />, <Screens />, '', <Cloud />, <Screen />, '', <Code />]

  return (
    <div className={Styles.stickers_container}>
      {
        icons?.map((sticker, index) => (
          <div id={index} className={Styles.stickers_sticker}>
            {sticker}
          </div>
        ))
      }
    </div>
  )
}
