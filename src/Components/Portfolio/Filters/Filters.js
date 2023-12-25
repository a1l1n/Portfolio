import React from 'react'
import Styles from './Filters.module.css'

export const Filters = () => {
  return (
    <div className={Styles.filter_container}>
      <button 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_all_active}`}>
        Todos
      </button>
      <button 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_full}
        ${Styles.filter_button_pair}`}>
        Full-Stack
      </button>
      <button 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_front}`}>
        Front-End
      </button>
      <button 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_back}
        ${Styles.filter_button_pair}`}>
        Back-End
      </button>
    </div>
  )
}
