import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Acceuil from './compenents/Acceuil/Acceuil';
import Application from './compenents/App/Application';
import WhitePaper from './compenents/White paper/WhitePaper';
import Investment from './compenents/Investment/Investment';
import NavBar from './compenents/NavBar/NavBar';


function App() {
  return (
    <div className="divextraapp">
      <div className='Appbdoy'>
        < NavBar />
          <Routes>
              <Route path='/Acceuil' element={<Acceuil />} /> 
              <Route path='/Application' element={<Application />} /> 
              <Route path='/WhitePaper' element={<WhitePaper />} /> 
              <Route path='/Investment' element={<Investment />} /> 
          </Routes>
      </div>
    </div>
  );
}

export default App;
