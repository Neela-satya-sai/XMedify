import React from 'react'
import Button from '../Button/Button'
import styles from "./HeroBanner.module.css"
import doctors from '../../assets/NicePng_doctor-png_336282 1.svg';



function HeroBanner() {
  return (
     <section className={styles.herobanner}>
        <div className={styles.details}>
           <h3  >Skip the travel! Find Online</h3>
           <span className={styles.medical}>Medical</span>  <span className={styles.centers}>Centers</span>
           <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <Button>Find Centers</Button>
        </div>
       

        <div className={styles.doctorimg}>
           <img src={doctors} alt='doctors img'></img>
        </div>

     </section>
  )
}

export default HeroBanner