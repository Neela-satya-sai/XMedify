import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SearchCard from '../../components/SearchCard/SearchCard';
import HospitalListGrid from '../../components/HospitalListGrid/HospitalListGrid';
import styles from "./MyBooking.module.css"

function MyBookings() {
  return (
    <>
    <Navbar></Navbar>
    <SearchCard></SearchCard>
    <h1 className={styles.title}>My Bookings</h1>
    <HospitalListGrid></HospitalListGrid>
    </>
  )
}

export default MyBookings;