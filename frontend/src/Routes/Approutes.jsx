import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const Approutes = () => {
  return (
   <Router>
    <Routes>
        <Route path='/user/register' element={<h1>user register form</h1>}></Route>
        <Route path='/user/login' element={<h1>user login form</h1>}></Route>
         <Route path='/food-partner/register' element={<h1>food partner register form</h1>}></Route>
        <Route path='/food-partner/login' element={<h1>food partner login form</h1>}></Route>

    </Routes>
   </Router>
  )
}

export default Approutes