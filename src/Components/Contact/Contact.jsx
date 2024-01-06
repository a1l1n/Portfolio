import React from 'react';
import { Form } from './Form/Form';
import { AiOutlineArrowRight } from "react-icons/ai";
import { MailBoxIcon, EmailIcon, LinkedinIcon } from '../../assets/Icons';
import Styles from "./Contact.module.css";

export const Contact = () => {
    
  return (
    <section className={Styles.contact_section} id="contact">
      <div className={Styles.contact_menu}>
        <div className={Styles.contact_card}>
          <div className={Styles.contact_inner_card}>
            <h1>Contact</h1>
            <MailBoxIcon />
          </div>
        </div>

        <div className={`${Styles.contact_minicard} ${Styles.contact_mail}`}>
          <div className={Styles.contact_inner_minicard}>
          <h3>Email</h3>
          <span>ailin.tobares@gmail.com</span>
          <a href="mailto:ailin.tobares@gmail.com" className={Styles.contact_button}>
            Contact me <AiOutlineArrowRight className={Styles.contact_send_arrow}/>
          </a>
          </div>
          <div className={`${Styles.contact_icon} ${Styles.contact_email}`}>
            <EmailIcon />
          </div>
        </div>

        <div className={`${Styles.contact_minicard} ${Styles.contact_linkedin}`}>
          <div className={Styles.contact_inner_minicard}>
            <h3>LinkedIn</h3>
            <span>Send me a DM </span>
            <a href="https://www.linkedin.com/feed/" target="_blank" className={Styles.contact_button}>
              Message <AiOutlineArrowRight className={Styles.contact_send_arrow}/>
            </a>
          </div>
          <div className={`${Styles.contact_icon} ${Styles.contact_linkedinIcon}`}>
            <LinkedinIcon />
          </div>
        </div>
      </div>
        
      <div className={Styles.contact_form}>
        <Form />
      </div>
    </section>
  )
}
