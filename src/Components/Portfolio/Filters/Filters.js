import React from 'react'
import Styles from './Filters.module.css'

export const Filters = ({ selectedFilter, onFilterChange }) => {

  return (
    <div className={Styles.filter_container}>
      <button
        onClick={() => onFilterChange('Full-stack')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_full}
        ${Styles.filter_button_pair}
        ${selectedFilter === 'Full-stack' ? Styles.filter_button_full_active : null}`}>
        Full-Stack
      </button>
      <button
        onClick={() => onFilterChange('Front-end')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_front}
        ${selectedFilter === 'Front-end' ? Styles.filter_button_front_active : null}`}>
        Front-End
      </button>
      <button
        onClick={() => onFilterChange('Back-end')} 
        className={`${Styles.filter_button} 
        ${Styles.filter_button_back}
        ${Styles.filter_button_pair}
        ${selectedFilter === 'Back-end' ? Styles.filter_button_back_active : null}`}>
        Back-End
      </button>
      <button
        onClick={() => onFilterChange('All')} 
        className={`${Styles.filter_button} 
        ${selectedFilter === 'All' ? Styles.filter_button_all_active : Styles.filter_button_all}`}>
        All
      </button>
    </div>
  )
}
