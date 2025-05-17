import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchCard from '../../components/SearchCard/SearchCard'
import HospitalListGrid from '../../components/HospitalListGrid/HospitalListGrid'
import { useApi } from '../../contextProvider'

function Home() {

  //  let {}= useApi();

  return (
    <>
     <Navbar></Navbar>
    <HeroBanner></HeroBanner>
   <SearchCard ></SearchCard>
  
   <HospitalListGrid />
    </>
   
  )
}

export default Home;