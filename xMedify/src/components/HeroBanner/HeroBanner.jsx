import React from 'react'
import Button from '../Button/Button'
import styles from "./HeroBanner.module.css"

function HeroBanner() {
  return (
     <section className={styles.herobanner}>
        <div className={styles.details}>
           <div>Skip the travel! Find Online</div>
           <span>Medical</span>  <span>Centers</span>
           <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <Button>Find Centers</Button>
        </div>
       

        <div className={styles.doctorimg}>
           <img src="../../assets/carasuals/image 1-1.svg " alt='doctors img'></img>
        </div>
     </section>
  )
}

export default HeroBanner