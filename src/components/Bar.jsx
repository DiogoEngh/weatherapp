import React from "react";
import "./styles/Bar.css"
const Bar = ({percent, hour}) => {
    return (
        <div className="Bar" style={{
            height: `${percent}%`,
            backgroundColor: "#bdf",
            borderRadius: "10px",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <p style={{
                fontSize: "10px",
                transform: "translateY(2rem) translateX(-.5rem)"
            }}>{hour}</p>
        </div>
    )
}

export default Bar