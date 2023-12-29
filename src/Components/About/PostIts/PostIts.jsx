import React from 'react'
import about from '../../../assets/Data/aboutMe'
import Styles from './PostIts.module.css'

import { Check } from '../../../assets/Icons'

export const PostIts = () => {
  return (
    <div className={Styles.post_container}>
      {
        about.map((post, index) => (
          <div key={index} className={`${Styles.post_content} 
            ${post.title === 'Perfil Profesional' ? Styles.post_profile :
            post.title === 'Números' ? Styles.post_numbers :
            post.title === 'Proyección' ? Styles.post_proyection 
            : Styles.post_data}
            ${index % 2 === 0 ? null : Styles.post_pair}`}>
            <div className={Styles.post_title}>
              <h1>{post.title}</h1>
            </div>

            <div className={Styles.post_items}>
              {
                post.items.map((i, index) => (
                  <div key={index} className={Styles.post_items_div}>
                    <div className={Styles.post_items_icon}>
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
{/*       <div className={`${Styles.post_icon}`}><Kitty /></div>
      <div className={`${Styles.post_icon}`}><Paint /></div> */}
    </div>
  )
}
