import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Carts from './pages/Carts';
import Profile from './pages/Profile';

function App() { 
  const [isLogedIn, setIsLogedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('eshop_jwt');
  if(token) {
    setIsLogedIn(true);
  }
}, []);

  return (
    <Router>
      <Navbar isLogedIn={isLogedIn} />
      
      <Routes>
        <Route path='/'  element={<Home/>} />

        <Route path='/auth/login'  element={<Auth login setIsLogedIn={setIsLogedIn} />} />
        <Route path='/auth/register' element={<Auth register />} />

        <Route path='/Carts' element={<Carts isLogedIn={isLogedIn} />} />

        <Route path='/profile' element={<Profile isLogedIn={isLogedIn} />} />
      </Routes>

    </Router>
  );
}

export default App;
