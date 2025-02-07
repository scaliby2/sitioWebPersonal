import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/proyects";
import Contact from "./components/contact";
import Start from "./components/start";
import Footer from "./components/footer";
import './App.css'; // 
import "animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Start/>
        <Navbar />
        <Routes>
          <Route path="/start" element= {<Start/>}/> 
        </Routes>        
        <About/>
        <Projects/> 
        <Contact/>
        <Footer/> 

      </div>
    </Router>
  );
}

export default App;
