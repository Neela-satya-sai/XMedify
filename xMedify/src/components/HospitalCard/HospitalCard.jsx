import React from "react";
import styles from "./HospitalCard.module.css";
import Button from "../Button/Button";
import hospitalImg from "../../assets/hospitalCardIcons/image 22.png"
import BookingSlots from "../BookingSlot/BookingSlot";

function HospitalCard({eachMedicalData}) {
    console.log(eachMedicalData);
  return (
    <>
    <div className={styles.hospitalCardWrapper}>
      <div className={styles.details}>
        <div className={styles.imgWrapper}>
              <img
                src={hospitalImg}
                alt="hospital imgage"
              />
        </div>
       
        <div className={styles.hospitalDetails}>
          <h3>{eachMedicalData['Hospital Name']}</h3>
          <span>{eachMedicalData.City}, {eachMedicalData.State}, {eachMedicalData["ZIP Code"]}</span>
          <p>Smilessence Center for Advanced Dentistry + 1</p>
          <h4><span style={{color:"green", fontWeight: "50px"}}>FREE $550 </span>Consultation fee at clinic</h4>
        </div>
      </div>

      <div className={styles.booking}>
        <h4 style={{color:"green", textAlign:"center", fontWeight : "bolder"} }> Available Today</h4>
        <Button>Book FREE Center Visit</Button>
      </div>
    
    </div>
     {<BookingSlots></BookingSlots>}
     </>
  );
}

export default HospitalCard;
