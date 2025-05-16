import React from 'react'
import styles from "./Navbar.module.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

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
          <Link to="/my-bookings"><Button>My Bookings</Button></Link>

        

         </div>
      </div>
    
    
    </nav>
  )
}

export default Navbar