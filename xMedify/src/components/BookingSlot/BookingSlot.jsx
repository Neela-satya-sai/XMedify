import React, { useState } from "react";
import styles from "./BookingSlot.module.css"; // Add relevant styles
import { useApi } from "../../contextProvider";
import Button from "../Button/Button";
import { useCallback } from "react";

const slotsData = [
  {
    day: "Today",
    slots: [
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Tomorrow",
    slots: [
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
    ],
  },
  {
    day: "Fri, 5 May",
    slots: [
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
    ],
  },
];

const BookingSlots = ({ eachMedicalData }) => {
  let { bookings, setBookings } = useApi();

  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState(null);


  const bookingSlot = useCallback(() => {
    if (!selectedSlot) return; // Ensure a slot is selected
  
    let obj = {
      "Hospital Name": eachMedicalData?.["Hospital Name"],
      City: eachMedicalData?.City,
      State: eachMedicalData?.State,
      "ZIP Code": eachMedicalData?.["ZIP Code"],
      date: selectedDay,
      slot: selectedSlot,
    };
  
    setBookings((prev) => {
      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      const updatedBookings = [...existingBookings, obj]; 
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      return updatedBookings;
    });
    alert(`Booked slot for ${selectedDay} at ${selectedSlot}`);
  }, [selectedDay, selectedSlot, eachMedicalData, setBookings]);
    

  // function bookingSlot() {
  //   console.log(eachMedicalData);
  //   let obj = {
  //     "Hospital Name": eachMedicalData["Hospital Name"],
  //     City: eachMedicalData.City,
  //     State: eachMedicalData.State,
  //     "ZIP Code": eachMedicalData["ZIP Code"],
  //     date: selectedDay,
  //     slot: selectedSlot,
  //   };
  //   setBookings((prev) => {
  //     const existingBookings =
  //       JSON.parse(localStorage.getItem("bookings")) || [];
  //     const updatedBookings = [...existingBookings, obj]; // Merge old bookings safely
  //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  //     console.log(updatedBookings);
  //     return updatedBookings;
  //   });

  //   alert(`Booked slot for ${selectedDay} at ${selectedSlot}`);
  // }

  return (
    <div className={styles.bookingWrapper}>
      {/* Date Selection */}
      <div className={styles.dateSelection}>
        {slotsData.map((item) => (
          <button
            key={item.day}
            className={selectedDay === item.day ? styles.active : ""}
            onClick={() => setSelectedDay(item.day)}
          >
            {item.day} ({item.slots.length} slots)
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className={styles.timeSlots}>
        {slotsData
          .find((item) => item.day === selectedDay)
          ?.slots.map((slot) => (
            <button
              key={slot}
              className={selectedSlot === slot ? styles.selected : ""}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
      </div>

      {/* Selected Slot Display */}
      {selectedSlot && (
        <>
          <p>Selected Slot: {selectedSlot} </p>{" "}
          <Button handlerfun={bookingSlot}>Book Now!</Button>
        </>
      )}
    </div>
  );
};

export default BookingSlots;
