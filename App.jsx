import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigationbar from "./components/Navigationbar/Navigationbar"
import Homebanner1 from "./components/Homebanner1/Homebanner1"
import Homebanner2 from "./components/Homebanner2/Homebanner2"
import Page from "./Workout/Page"
import ReportPage from "./report/ReportPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //const navigate=Navigate();
  return (
    <Router>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<>
          <Homebanner1/>
      <Homebanner2/>
      </>}/>
      
        <Route path="/workout/:type" element={<Page/>}/>
        <Route path="/report/:name" element={<ReportPage/>}/>
  
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App
