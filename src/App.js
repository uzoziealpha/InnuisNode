import  React, { useState } from 'react'; 
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import './index.css';


function App() {


  return (
    <div className="App">
    <Navbar/>
    <Homescreen/>
    </div>
  );
}

export default App;
