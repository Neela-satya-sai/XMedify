import React from "react";
import Ad from "../../assets/sensodyne_dweb.png.png";
import styles from "./MyBookingsList.module.css";
import HospitalCard from "../HospitalCard/HospitalCard";
import { useApi } from "../../contextProvider";

function MyBookingList({booked}) {
  let { bookings, citySelected, stateSelected, search} = useApi();
    // console.log(medicalCenters);
  let count = bookings.length;
 

  return (
    <>
      {" "}
      <div className={styles.hospitalListGrid_Wrapper}>
        {/* {stateSelected && citySelected && search && (
          <div className={styles.header_wrapper}>
            <h1>
              {count} medical centers available in {citySelected}
            </h1>
            <div className={styles.tagline}>
              {" "}
              <img
                src="../../../public/verified.1f87346e730e 1.png"
                alt="right tick icon"
              />{" "}
              <p>
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
          </div>
        )} */}

        <div className={styles.gridWrapper}>
           <div className={styles.hospitalCard_rapper}>
            {bookings.map((eachCenter, idx) => 
              // console.log(eachCenter);
              <HospitalCard
                key={idx}
                eachMedicalData={eachCenter}
                booked={booked}
              ></HospitalCard>
            )}
          </div>
         

          <div className={styles.ad}>
            <img src={Ad} alt="advertising space" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBookingList;
