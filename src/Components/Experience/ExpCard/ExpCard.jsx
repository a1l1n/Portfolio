import React from 'react'
import experience from '../../../assets/Data/experience'
import { Deal } from '../../../assets/Icons'


import Styles from './ExpCard.module.css'

export const ExpCard = () => {
  return (
    <div className={Styles.exp_container}>
      <div className={Styles.exp_card_deal}>
        <div className={Styles.exp_card_deal_title}>
          <h1>We can be the next match</h1>
          <div className={Styles.exp_title_light}></div>
        </div>
        <div className={Styles.exp_card_icon}>
          <Deal />
        </div>
      </div>

      <div>
        {
            experience?.map((e) => (
              <div className={`${Styles.exp_card} ${Styles.exp_holocruxe}`}>
                <div key={e.id} className={Styles.exp_card_front}>
                  <img src={e.image} alt='Entreprise Logo' className={`${Styles.exp_holocruxe_logo}`} />
                  <div className={`${Styles.exp_holocruxe_phrase}`}>
                    <p>{e.phrase}</p>
                  </div>
                </div>
                
{/*                 <div className={Styles.exp_card_back}>
                  <h2>{e.job}</h2>
                </div> */}
              </div>
            ))
        }
      </div>
    </div>
  )
}
