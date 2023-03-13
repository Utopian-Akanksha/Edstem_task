import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import List from './List'
import Details from './Details'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/detail/:id" element={<Details/>} />
    </Routes>
  )
}

export default AllRoutes