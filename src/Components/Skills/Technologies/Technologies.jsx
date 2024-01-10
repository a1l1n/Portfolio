import React from 'react'
import tech from '../../../assets/Data/technologies'
import { Check } from '../../../assets/Icons'
import Styles from './Technologies.module.css'

export const Technologies = () => {
  return (
    <div className={Styles.tech_container}>
      {
        tech.map((t, index) => (
          <div key={index} className={`${Styles.tech_content}
            ${t.title === 'Back-End' ? Styles.tech_back : t.title === 'Front-End' ? Styles.tech_front : Styles.tech_tools}
            ${index % 2 === 0 ? Styles.tech_pair : null}`}>
            <div className={`${Styles.tech_title}`}>
              <h1>{t.title}</h1>
            </div>

            <div className={Styles.tech_items}>
              { 
                t.items.map((i, index) => ( 
                  <div key={index} className={Styles.tech_list}>
                      <div className={Styles.tech_icon}>
                        <Check />
                      </div>
                      <ul>
                        <li>{i}</li>
                      </ul>
                  </div>
                ))
              }
            </div>
           </div>
          ))
        }
    </div>
  )
}
