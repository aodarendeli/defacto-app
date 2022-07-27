import React, { useState } from "react";
import Filter from "./components/Filter";
import logo from './assets/logo.png'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={logo} style={{width:"50px" , height: "50px"}}/>
           <Filter />
        </div>
      </div>
    </div>

   
  );
}

export default App;
