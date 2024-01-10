import React from 'react'
import { WorkTableIcon } from '../../assets/Icons'
import Styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section className={Styles.exp_section} id='Professional Experience'>
      <div className={Styles.exp_menu}>

        <div className={Styles.exp_card}>
          <div className={Styles.exp_inner_card}>
            <div className={Styles.exp_title}>
              <h1>Professional Experience</h1>
            </div>
            <WorkTableIcon />
          </div>
        </div>
      </div>

      <div className={Styles.exp_experience}>
          hola mundo
      </div>
    </section>
  )
}
