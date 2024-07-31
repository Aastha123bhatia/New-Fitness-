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
    </Router>
  )
}

export default App