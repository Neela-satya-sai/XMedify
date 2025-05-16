import React from "react";
import styles from "./HospitalCard.module.css";
import Button from "../Button/Button";
import hospitalImg from "../../assets/hospitalCardIcons/image 22.png"

function HospitalCard() {
  return (
    <div className={styles.hospitalCardWrapper}>
      <div className={styles.details}>
        <div className={styles.imgWrapper}>
              <img
                src={hospitalImg}
                alt="hospital imgage"
              />
        </div>
       
        <div className={styles.hospitalDetails}>
          <h3>Fortis Hospital Richmond Road</h3>
          <span>Banglore, Karnataka</span>
          <p>Smilessence Center for Advanced Dentistry + 1</p>
          <h6>Consultation fee at clinic</h6>
        </div>
      </div>

      <div className={styles.booking}>
        <h4>Available Today</h4>
        <Button>Book FREE Center Visit</Button>
      </div>
    </div>
  );
}

export default HospitalCard;
