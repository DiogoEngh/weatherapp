import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import "./styles/Graphic.css";

const Graphic = ({ dataGraphic }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, dataGraphic)

  return (
    <div className="Graphic">
      <p>Chain of rain</p>
      <div className="mainGraphic">
      {(!loading && dataGraphic.length > 0) && dataGraphic.map((elem, key) => {
        return <Bar key={key} percent={elem.chance_rain} hour={elem.hour} />
      })}
        <div
          className="compare"
          style={{
            top: "0%",
          }}
        >
          <p>Rainy</p>
        </div>
        <div
          className="compare"
          style={{
            top: "33%",
          }}
        >
          <p>Sunny</p>
        </div>
        <div
          className="compare"
          style={{
            top: "66%",
          }}
        >
          <p>Heavy</p>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
