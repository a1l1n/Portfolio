import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMailSend } from "react-icons/bi";
import { AiOutlineArrowRight, AiOutlineLinkedin, AiOutlineSend } from "react-icons/ai";
import Swal from 'sweetalert2';
import Styles from "./Contact.module.css";

export const Contact = () => {
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

/*     function validate(user) {
      let errors = {};
      if (!user.fullname.trim()) {
        errors.fullname = 'Username is required';
      };
      if (!user.mail) {
        errors.mail = "Por favor ingresá un mail"
      } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.mail = "Por favor ingresá un mail válido"
      }
    } */
    
  return (
    <section className={Styles.contact_section} id="contact">
        <h2 className={Styles.contact_title}>Conectemos</h2>
        <h3 className={Styles.contact_subtitle}>Todo empieza con este paso</h3>

        
        <div className={Styles.contact_container_grid}>
            <div className={Styles.contact_content}>
                <h3 className={Styles.contact_content_title}>: : : Si querés saber más sobre mí</h3>
                
                <div className={Styles.contact_info}>
                  <div className={Styles.contact_card}>
                    <BiMailSend className={Styles.contact_mail_icon}/>
                    <div className={Styles.contact_data}>
                      <h3>Email</h3>
                      <span>ailin.tobares@gmail.com</span>
                      <a href="mailto:ailin.tobares@gmail.com" className={Styles.contact_button}>
                        Escribime <AiOutlineArrowRight className={Styles.contact_send_arrow}/>
                      </a>
                    </div>
                  </div>

                  <div className={Styles.contact_card}>
                    <AiOutlineLinkedin className={Styles.contact_lin_incon}/>
                    <div className={Styles.contact_data}>
                      <h3>LinkedIn</h3>
                      <span>Mandame un DM </span>
                      <a href="https://www.linkedin.com/feed/" target="_blank" className={Styles.contact_button}>
                      Mensaje <AiOutlineArrowRight className={Styles.contact_send_arrow}/>
                      </a>
                    </div>
                  </div>

                </div>
            </div>

            <div className={Styles.contact_content}>
                <h3 className={Styles.contact_content_title}>: : : Si querés compartirme tu idea</h3>
            
                <form className={Styles.contact_form} ref={form} onSubmit={sendEmail}>
                  <div className={Styles.contact_form_div}>
                    <label className={Styles.contact_form_tag}>Name</label>
                    <input 
                    type="text"
                    name="user_name"
                    className={Styles.contact_form_input}
                    placeholder="Decime tu nombre" 
                    required/>
                  </div>

                  <div className={Styles.contact_form_div}>
                    <label className={Styles.contact_form_tag}>Email</label>
                    <input 
                    type="email"
                    name="user_email"
                    className={Styles.contact_form_input}
                    placeholder="Dejame tu mail" 
                    required/>
                  </div>

                  <div className={Styles.contact_form_div}>
                    <label className={Styles.contact_form_tag}>Proyecto</label>
                    <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Compartime tu proyecto o ideas..."  
                    className={Styles.contact_form_area}>
                    </textarea>
                  </div>

                  <button className={Styles.contact_send_button}>
                    Enviar <AiOutlineSend className={Styles.contact_send_button_icon}/>
                  </button>
                </form>
            </div>
        </div>
    </section>
  )
}
