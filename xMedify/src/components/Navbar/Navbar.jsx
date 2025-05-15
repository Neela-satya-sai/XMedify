import React from 'react'
import styles from "./Navbar.module.css"
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.elements}>

        <img src= "/logo.svg" alt="medfiy logo" />

         <div className={styles.options}>
          <div>Find Doctor</div>
          <div>Hospitals</div>
          <div>Sugery</div>
          <div>Facilities</div> 
         
          <Button>My Bookings</Button>

         </div>
      </div>
    
    
    </nav>
  )
}

export default Navbar