import React from 'react'
import { BrowserRouter , Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    // <Login />
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App