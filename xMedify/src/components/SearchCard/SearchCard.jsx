import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchCard.module.css";
import Button from "../Button/Button";
import Selection from "../Selection/Selection";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useApi } from "../../contextProvider";

function SearchCard() {
  let {
    states,
    cities,
    setStates,
    setCities,
    stateSelected,
    citySelected,
    setStateSelected,
    setCitySelected,
    handleSearch,
    handleSelection
  } = useApi();

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

      <Button type={"submit"} id={"searchBtn"} handlerfun={handleSearch}>
        Search
      </Button>
      {/* //Add Search Button: Include a type="submit" button labeled "Search" and id=”searchBtn” to submit the city and state details. */}
    </div>
  );
}

export default SearchCard;
