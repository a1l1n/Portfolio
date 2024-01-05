import React, { useRef } from 'react'
import { AiOutlineSend } from "react-icons/ai";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Styles from './Form.module.css'

export const Form = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_md66mxh", 
          "template_1kskdis", 
          form.current, 
          "hVMGP3Abq7X8FCK-O")
          .then((result) => {
              console.log("Mensaje enviado", result.text);
              Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado!',
                text: 'En breves te responderé',
              })
          }, (error) => {
              console.log("Todo ha fallado, el horror", error.text);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error, probá de nuevo más tarde por favor'
              })
            });
          e.target.reset();
        };

  return (

    <div className={Styles.form_content}>
        <div className={Styles.form_title}>
          <h3>If you like, you can share me your projects or ideas</h3>
        </div>

    <form className={Styles.contact_form} ref={form} onSubmit={sendEmail}>
      <div className={Styles.contact_form_div}>
        <label className={Styles.contact_form_tag}>Name: </label>
        <input 
        type="text"
        name="user_name"
        className={Styles.contact_form_input}
        required/>
      </div>

      <div className={Styles.contact_form_div}>
        <label className={Styles.contact_form_tag}>Email: </label>
        <input 
        type="email"
        name="user_email"
        className={Styles.contact_form_input}
        required/>
      </div>

      <div className={Styles.contact_form_div}>
        <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Compartime tu proyecto o ideas..."  
        className={Styles.contact_form_area}>
        </textarea>
      </div>

      <div className={Styles.contact_button_div}>
        <button className={Styles.contact_send_button}>
            Send 
        </button>
        <div className={Styles.contact_button_icon_div}>
            <AiOutlineSend className={Styles.contact_button_icon}/>
        </div>
      </div>
    </form>
</div>
  )
}
