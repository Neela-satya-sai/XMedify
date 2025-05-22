import React from "react";
import SearchCard from "../../components/SearchCard/SearchCard";
import Navbar from "../../components/Navbar/Navbar";
import HospitalListGrid from "../../components/HospitalListGrid/HospitalListGrid";
const Search = () => {
  return (
    <>
      <Navbar></Navbar>
      <SearchCard></SearchCard>
      <HospitalListGrid />
    </>
  );
};

export default Search;
