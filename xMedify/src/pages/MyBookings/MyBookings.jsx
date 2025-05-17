import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import SearchCard from '../../components/SearchCard/SearchCard';
// import HospitalListGrid from '../../components/HospitalListGrid/HospitalListGrid';
import styles from "./MyBooking.module.css"
import MyBookingList from '../../components/MyBookingList/MyBookingsList';

function MyBookings() {
  return (
    <>
    <Navbar></Navbar>
    {/* <SearchCard></SearchCard> */}
    <h1 className={styles.title}>My Bookings</h1>
    {/* <HospitalListGrid booked></HospitalListGrid> */}
    <MyBookingList booked={true}></MyBookingList>
    </>
  )
}

export default MyBookings;