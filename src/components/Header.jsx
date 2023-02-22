import React, { useState } from "react";
import "./styles/Header.css";
import girlIcon from "../assets/girlIcon.jpg"
import Sino from "../assets/sino.svg"
import Menu from "../assets/aplicativos.svg"
import Search from "../assets/procurar.svg"
import Marcador from "../assets/marcador.svg"
import { searchCity } from "./services";

const Header = ({handleSelectCity, selectCity}) => {

  const [data, setData] = useState([])
  const [ct, setCT] = useState("Brazil")

  const handleChangeText = (e) => {
    if(e.target.value.length > 3){
      searchCity(e.target.value).then(response => {
        response.json().then(info => {
          setData(info)
          if(info.length > 5){
            setData(info.slice(0, 5))
          }else{
            setData(info)
          }
        })
      })
    }else{
      setData([])
    }
  }

  return (
    <header className="Header">
      <div className="Icon">
        <img src={girlIcon} alt="nada" />
      </div>
      <span>
        <div className="SearchBar">
          <img alt="nada" style={{
            height: "1.5rem",
            width: "1.5rem",
            position: "absolute",
            marginLeft: ".7rem"
          }} src={Search} />
          <input type="text" placeholder="Search city..." onChange={handleChangeText}/>
          <div className="List">
            {data.length > 0 && data.map((elem, key) => {
              return (
                <div style={{
                  height: "2.2rem",
                  widrth: "100%"
                }}>
                  <p onClick={() => {
                    handleSelectCity(elem.name)
                    setCT(elem.country)
                    setData([])
                  }} className="itemMenu">{elem.country} - {elem.name}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="Country"><img alt="nada" style={{
            height: "1.5rem",
            width: "1.5rem",
            position: "relative",
            marginRight: ".5rem"
          }} src={Marcador} />{ct}, {selectCity}</div>
      </span>
      <div className="Alerts">
        <img src={Sino} alt="nada" />
      </div>
      <div className="Menu">
      <img src={Menu} alt="nada" />
      </div>
    </header>
  );
};

export default Header;
