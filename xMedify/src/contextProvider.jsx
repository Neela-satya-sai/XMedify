import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import {enqueueSnackbar, useSnackbar} from "notistack";

// Create the context
const ApiContext = createContext();

// Provider component
const ContextProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters]=useState([]);
  const [bookings, setBookings] = useState([]);

  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [search, setSearch] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  
  async function performApiCall(url, setApiData) {
    try {
      let data = await axios.get(url);
      //  console.log(data.data);
      setApiData(data.data);
    } catch (error) {
      console.error(`the error is:${error}`);
    }
  }
  useEffect(() => {
    performApiCall(
      "https://meddata-backend.onrender.com/states",
      setStates
    );
   
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings); // Set from local storage
  
  }, []);

  useEffect(() => { //geting cities of a specific state
    setSearch(false);
    setMedicalCenters([]);
    setCities([]);
    if (stateSelected) {
      performApiCall(
        `https://meddata-backend.onrender.com/cities/${stateSelected}`,
        setCities
      );
      setCitySelected("");
      
      
    }

    // console.log("from state");
  }, [stateSelected]);

  useEffect(() => {
    setMedicalCenters([]);
    if ( stateSelected && citySelected) {
      performApiCall(
        `https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`,
        setMedicalCenters
      );
    }


  }, [ citySelected]);
  

    // useEffect(() => {
    //   if (bookings.length > 0) {  // Prevent unnecessary updates
    //     let existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    //     localStorage.setItem("bookings", JSON.stringify([...existingBookings, ...bookings]));
    //   }
    // }, [bookings]);



  function handleSearch(){
    setSearch(true);
    if ( stateSelected && citySelected ) {
      setMedicalCenters([]);
      // setSearch(true);
      performApiCall(
        `https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`,
        setMedicalCenters
      );

    }else{
      enqueueSnackbar("please select both state and city",{variant:"warning"});
    }
    
  }


  function handleSelection(event, setSelection) {
    console.log(event.target.value);
    setSelection(event.target.value);
  }

  return (
    <ApiContext.Provider value={{ states, cities, setCities, setStates, citySelected, stateSelected, setStateSelected, setCitySelected, medicalCenters, setMedicalCenters, handleSelection , handleSearch, bookings, setBookings, search, setSearch}}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook for using the context
export const useApi = () => useContext(ApiContext);

export default ContextProvider;