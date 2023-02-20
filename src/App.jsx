import React, { useState } from 'react';
import './App.css';
import Days from './components/Days';
import Graphic from './components/Graphic';
import Header from './components/Header';

const App = () => {
  const [selectCity, setSelectCity] = useState("Aracaju")
  const [dataGraphic, setDataGraphic] = useState([])

  const handleSelectCity = (e) => {
    setSelectCity(e)
  }

  const handleDataGraphic = (e) => {
    setDataGraphic(e)
  }

  return (
    <div className='App'>
      <Header handleSelectCity={handleSelectCity} selectCity={selectCity}/>
      <Days selectCity={selectCity} handleDataGraphic={handleDataGraphic}/>
      <Graphic dataGraphic={dataGraphic}/>
    </div>
  )
}

export default App;
