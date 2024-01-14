import React, { useRef, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Styles from './Form.module.css'

export const Form = () => {
  const form = useRef();
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const currentText = e.target.value;
    setCharCount(currentText.length);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const message = form.current.message.value;

    // Validación: Verificar que el mensaje tenga al menos 80 caracteres y no sea aleatorio
    if (message.length < 60 || /^\s*$/.test(message) || /^[a-zA-Z]*$/.test(message) || /^\d+$/.test(message)) {
      // Mostrar un mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid message ʕ•́ᴥ•̀ʔっ',
      });
      return;
    }
    
  emailjs.sendForm('service_406my9s', 'template_35p0vxj', form.current, '9ds4iNx9WwNLjNFwV') 
    .then((response) => {
      console.log("Mail sent successfully :D", response);
      Swal.fire({
        icon: 'success',
        title: 'Message sent successfully!',
        text: 'I will respond to you shortly',
      })
    })
    .catch((error) => {
      console.log("There was an error sending the Email: ", error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error, please try again later'
      })
    })
    e.target.reset();
    setCharCount(0);
  }

  return (

    <div className={Styles.form_content}>
        <div className={Styles.form_cutie_top}>
        * ´ * ❀ ʕ•́ᴥ•̀ʔっ ❀ *´* ≧◔◡◔≦ *´* ❀ ʕ•́ᴥ•̀ʔっ ❀ * ´ *
        </div>

        <div className={Styles.form_title}>
          <h3> You can share me your projects, ideas or Feedback</h3>
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
        maxlength="1050"
        placeholder="I would like my project..."
        onChange={handleTextChange}  
        className={Styles.contact_form_area}>
        </textarea> 
      </div>

      <div className={Styles.form_numbers}>
        <p>{charCount} of 1050 characters</p>
      </div>

      <div className={Styles.contact_button_div}>
        <button className={Styles.contact_send_button}>
            Send 
            <AiOutlineSend className={Styles.contact_button_icon}/>
        </button>
      </div>

      <div className={Styles.form_cutie_bottom}>
      * ´ * ❀ ʕ•́ᴥ•̀ʔっ ❀ *´* ≧◔◡◔≦ *´* ❀ ʕ•́ᴥ•̀ʔっ ❀ * ´ *
      </div>
    </form>
</div>
  )
}
