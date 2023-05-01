import React from 'react'
import Auth from './components/Auth'
import MainForm from './components/MainForm'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const App=() => {
  const isAuth=Boolean(useSelector((state) => state.token))
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={!isAuth? <Auth />:<Navigate to="/form" />} />
          <Route path='/form' element={isAuth? <MainForm />:<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App