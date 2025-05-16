import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./SearchCard.module.css";
import Button from '../Button/Button';
import Selection from '../Selection/Selection';
import axios from "axios";
import { useSnackbar } from 'notistack';

function SearchCard() {

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters]=useState([]);

  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");

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
      performApiCall(
        `https://meddata-backend.onrender.com/data?state=${stateSelected}&city=${citySelected}`,
        setMedicalCenters
      );
      
      setStateSelected("");
      setCitySelected("");
       console.log(medicalCenters);

    }else{
      enqueueSnackbar("please select both state and city",{variant:"warning"});
    }
     
  }
  function handleSelection(event, setSelection) {
    console.log(event.target.value);
    setSelection(event.target.value);
  }

  return (
    <div className={styles.searchcard}>
      <Selection
          data={states}
          name="state"
          current={stateSelected}
          handlerfun={(event) => handleSelection(event, setStateSelected)}
          isvisible={true}
        />
        <Selection
          data={cities}
          name="city"
          current={citySelected}
          handlerfun={(event) => handleSelection(event, setCitySelected)}
          isvisible={stateSelected}
        />
  
      <Button type={"submit"}  id ={"searchBtn"} handlerfun={handleSearch}>Search</Button>
    {/* //Add Search Button: Include a type="submit" button labeled "Search" and id=”searchBtn” to submit the city and state details. */}
    
    </div>
  )
}

export default SearchCard