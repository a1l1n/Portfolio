import React from 'react'
import Styles from './Filters.module.css'

export const Filters = ({ selectedFilter, onFilterChange }) => {

  return (
    <div className={Styles.filter_container}>
      <button
        onClick={() => onFilterChange('Full-Stack')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_full}
        ${Styles.filter_button_pair}
        ${selectedFilter === 'Full-Stack' ? Styles.filter_button_full_active : null}`}>
        Full-Stack
      </button>
      <button
        onClick={() => onFilterChange('Front-End')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_front}
        ${selectedFilter === 'Front-End' ? Styles.filter_button_front_active : null}`}>
        Front-End
      </button>
      <button
        onClick={() => onFilterChange('Back-End')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_back}
        ${Styles.filter_button_pair}
        ${selectedFilter === 'Back-End' ? Styles.filter_button_back_active : null}`}>
        Back-End
      </button>
      <button
        onClick={() => onFilterChange('Todos')} 
        className={`${Styles.filter_button} 
        ${selectedFilter === 'Todos' ? Styles.filter_button_all_active : Styles.filter_button_all}`}>
        Todos
      </button>
    </div>
  )
}
