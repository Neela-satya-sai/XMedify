import React from "react";
import Ad from "../../assets/sensodyne_dweb.png.png";
import styles from "./HospitalListGrid.module.css";
import HospitalCard from "../HospitalCard/HospitalCard";

function HospitalListGrid() {
  return (
    <>
      <div className={styles.gridWrapper}>

        <div className={styles.hospitalCard_rapper}>

          <HospitalCard></HospitalCard>
        </div>

        <div className={styles.ad}>
          <img src={Ad} alt="advertising space" />
        </div>

      </div>
    </>
  );
}

export default HospitalListGrid;
