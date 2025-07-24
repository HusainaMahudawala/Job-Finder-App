import logo from './logo.svg';
import './App.css';
import {Outlet } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Outlet />
  </>
  );
}

export default App;
