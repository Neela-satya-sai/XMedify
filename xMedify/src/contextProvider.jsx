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
    const totalBookings = JSON.parse(localStorage.getItem("bookings"));

    setBookings(totalBookings || []);

  }, []);

  useEffect(() => {
    if (stateSelected) {
      performApiCall(
        `https://meddata-backend.onrender.com/cities/${stateSelected}`,
        setCities
      );
      setCitySelected("");
      setCities([]);
      
    }

    // console.log("from state");
  }, [stateSelected]);

  // useEffect(() => {
  //   if ( stateSelected && citySelected) {
  //     performApiCall(
  //       `https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`,
  //       setMedicalCenters
  //     );
      
  //     // setStateSelected("");
  //     // setCitySelected("");
      

  //   }

  //   // console.log("from countries");
  // }, [stateSelected, citySelected]);


  function handleSearch(){
    if ( stateSelected && citySelected) {
      setSearch(true);
      performApiCall(
        `https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`,
        setMedicalCenters
      );
      
      // setStateSelected("");
      // setCitySelected("");
      //  console.log(medicalCenters);

    }else{
      enqueueSnackbar("please select both state and city",{variant:"warning"});
    }
    
  }
  function handleSelection(event, setSelection) {
    console.log(event.target.value);
    setSelection(event.target.value);
  }

  return (
    <ApiContext.Provider value={{ states, cities, setCities, setStates, citySelected, stateSelected, setStateSelected, setCitySelected, medicalCenters, setMedicalCenters, handleSelection , handleSearch, bookings, setBookings}}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook for using the context
export const useApi = () => useContext(ApiContext);

export default ContextProvider;