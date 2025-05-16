import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import SearchCard from './components/SearchCard/SearchCard'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
   <SearchCard></SearchCard>
    </>
  )
}

export default App