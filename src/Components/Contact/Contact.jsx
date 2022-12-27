import React from 'react';
import Styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={Styles.contact_section} id="contact">
        <h2 className={Styles.contact_title}>Conectemos</h2>
        <h3 className={Styles.contact_subtitle}>Escribime</h3>

        <div className={Styles.contact_container_grid}>
            <div className={Styles.contact_content}>
                <h3 className={Styles.contact_title}>Escribime</h3>
            </div>
            <div className={Styles.contact_content}>
                <h3 className={Styles.contact_title}>Compartime tu idea</h3>
            </div>
        </div>
    </section>
  )
}
