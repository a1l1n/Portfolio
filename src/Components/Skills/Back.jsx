import React from 'react';
import { BsPatchCheck } from "react-icons/bs";
import Styles from "./Skills.module.css";

/* NODEJS, SEQUELIZE, POSTGRESQL, EXPRÉSS, FIREBASE */

export const Back = () => {
  return (
    <div className={Styles.skills_content}>
        <h3 className={Styles.skills_title}>: : Back-End Developer : :</h3>

        <div className={Styles.skills_box}>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>NodeJs</h3>
                    <h4 className={Styles.skills_level}>Basic</h4>
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Sequelize</h3>
                    <h4 className={Styles.skills_level}>Basic</h4>
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>PostgreSQL</h3>
                    <h4 className={Styles.skills_level}>Basic</h4>
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Express</h3>
                    <h4 className={Styles.skills_level}>Basic</h4>
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Firebase</h3>
                    <h4 className={Styles.skills_level}>Basic</h4>
                </div>
            </div>

        </div>
    </div>
  )
}
