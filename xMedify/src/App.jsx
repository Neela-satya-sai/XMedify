import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import SearchCard from './components/SearchCard/SearchCard'
import HospitalCard from './components/HospitalCard/HospitalCard'
import HospitalListGrid from './components/HospitalListGrid/HospitalListGrid'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
   <SearchCard></SearchCard>
   {/* <HospitalCard></HospitalCard> */}
   <HospitalListGrid/>
    </>
  )
}

export default App