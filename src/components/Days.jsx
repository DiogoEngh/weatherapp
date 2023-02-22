import React, { useEffect, useState } from "react";
import { searchCity7Days } from "./services";
import "./styles/Days.css";

const days = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
};

const listaSemana = (index) => {
  const daysSemana = Object.keys(days);
  const listaMenores = [];
  const listaMaiores = [];
  for (var i in daysSemana) {
    if (i < index) {
      listaMenores.push(daysSemana[i]);
    } else {
      listaMaiores.push(daysSemana[i]);
    }
  }
  return [...listaMaiores, ...listaMenores];
};

const Days = ({selectCity, handleDataGraphic}) => {
  const date = listaSemana(new Date().getDay());
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    temp: "",
    minTemp: "",
    maxTemp: "",
    humidity: "",
    velWind: "",
    sunset: "",
    sunrise: "",
    moonset: "",
    moonrise: "",
    condition: "",
    isDay: 0,
  });

  const [dataGenerics, setDataGenerics] = useState({
    Sun: {
        icon: "",
        temp: ""
    },
    Mon: {
        icon: "",
        temp: ""
    },
    Tue: {
        icon: "",
        temp: ""
    },
    Wed: {
        icon: "",
        temp: ""
    },
    Thu: {
        icon: "",
        temp: ""
    },
    Fri: {
        icon: "",
        temp: ""
    },
    Sat: {
        icon: "",
        temp: ""
    },
  })

  const [daySelected, setDaySelected] = useState(date[0]);

  const handleChangeDay = (e) => {
    setDaySelected(e);
  };

  useEffect(() => {
    setLoading(true)
      searchCity7Days(selectCity).then(response => {
          response.json().then(info => {
              setData({
                  temp: info.forecast.forecastday[date.indexOf(daySelected)].hour[new Date().getHours()].temp_c,
                  minTemp: info.forecast.forecastday[date.indexOf(daySelected)].day.mintemp_c,
                  maxTemp: info.forecast.forecastday[date.indexOf(daySelected)].day.maxtemp_c,
                  humidity: info.forecast.forecastday[date.indexOf(daySelected)].hour[new Date().getHours()].humidity,
                  velWind: info.forecast.forecastday[date.indexOf(daySelected)].hour[new Date().getHours()].wind_kph,
                  sunset: info.forecast.forecastday[date.indexOf(daySelected)].astro.sunset,
                  sunrise: info.forecast.forecastday[date.indexOf(daySelected)].astro.sunrise,
                  moonset: info.forecast.forecastday[date.indexOf(daySelected)].astro.moonset,
                  moonrise: info.forecast.forecastday[date.indexOf(daySelected)].astro.moonrise,
                  condition: info.forecast.forecastday[date.indexOf(daySelected)].hour[new Date().getHours()].condition,
                  isDay: info.current.is_day
               })
               setDataGenerics({
                Sun: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Sun")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Sun")].hour[new Date().getHours()].temp_c
                },
                Mon: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Mon")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Mon")].hour[new Date().getHours()].temp_c
                },
                Tue: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Tue")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Tue")].hour[new Date().getHours()].temp_c
                },
                Wed: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Wed")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Wed")].hour[new Date().getHours()].temp_c
                },
                Thu: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Thu")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Thu")].hour[new Date().getHours()].temp_c
                },
                Fri: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Fri")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Fri")].hour[new Date().getHours()].temp_c
                },
                Sat: {
                    icon: info.forecast.forecastday[Object.values(date).indexOf("Sat")].hour[new Date().getHours()].condition.icon,
                    temp: info.forecast.forecastday[Object.values(date).indexOf("Sat")].hour[new Date().getHours()].temp_c
                },
              })
              handleDataGraphic([
                {
                  hour: info.current.isDay ? "0am" : "12pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 0 : 12].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "1am" : "1pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 1 : 13].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "2am" : "2pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 2 : 14].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "3am" : "3pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 3 : 15].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "4am" : "4pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 4 : 16].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "5am" : "5pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 5 : 17].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "6am" : "6pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 6 : 18].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "7am" : "7pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 7 : 19].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "8am" : "8pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 8 : 20].chance_of_rain
                },
                {
                  hour: info.current.isDay ? "9am" : "9pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 9 : 21].chance_of_rain
                },
                {
                  hour:  info.current.isDay ?"10am" : "10pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 10 : 22].chance_of_rain
                },
                {
                  hour:  info.current.isDay ?"11am" : "11pm",
                  chance_rain: info.forecast.forecastday[date.indexOf(daySelected)].hour[info.current.isDay ? 11 : 23].chance_of_rain
                }
              ])
          })
          .catch(s => console.lol(s))
          .finally(() => setLoading(false))

      })
  }, [daySelected, selectCity])

  return (
    <div className="Days">
      <p className="Today">Today</p>
      <div className="Boxs">
        {(!loading && !(Object.values(data).indexOf("") === 0)) && date.map((elem, key) => {
          if (elem !== daySelected) {
            return (
              <div
                className="noSelected"
                style={{
                  height: "12rem",
                  backgroundColor: "#555",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  color: "#eee",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all .3s ease-in-out",
                }}
                key={key}
                onClick={() => handleChangeDay(elem)}
              >
                <p className="Others">{elem}</p>
                <div style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    marginTop: "2rem"
                }}>
                    <img alt="nada" src={dataGenerics[elem].icon} />
                </div>
                <p style={{
                    fontSize: "30px",
                    marginTop: "1rem"
                }}>{dataGenerics[elem].temp}°</p>
              </div>
            );
          } else {
            return (
              <div
                className="optSelected"
                style={{
                  height: "12rem",
                  backgroundColor: "#bdf",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  color: "#222",
                  fontWeight: "500",
                  position: "relative",
                  transition: "all .3s ease-in-out",
                }}
                key={key}
              >
                <p className="Selected">{days[elem]}</p>
                <p className="Hour">{`${new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}`}</p>
                <p className="tempSelected"
                  style={{
                    position: "absolute",
                    fontSize: "40px",
                    color: "#222",
                    left: "1rem",
                    top: "4rem",
                    fontWeight: "600",
                  }}
                >
                  {data.temp}°
                </p>
                <div
                  style={{
                    position: "absolute",
                    right: "1rem",
                    height: "3.5rem",
                    width: "3.5rem",
                    top: "4rem",
                  }}
                >
                    <img alt="nada" src={data.condition.icon} />
                </div>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    left: "1rem",
                    bottom: "2rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  Vel <span style={{ color: "#222" }}>{data.velWind} km/h</span>
                </p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    left: "1rem",
                    bottom: "4rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  Min <span style={{ color: "#222" }}>{data.minTemp}°</span>
                </p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    left: "1rem",
                    bottom: "3rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  Max <span style={{ color: "#222" }}>{data.maxTemp}°</span>
                </p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    left: "1rem",
                    bottom: "1rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  Humidity <span style={{ color: "#222" }}>{data.humidity}%</span>
                </p>

                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    right: "1rem",
                    bottom: "1rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  {data.isDay === 1 ? "Sunset" : "Moonset"} <span style={{ color: "#222" }}>{data.isDay === 1 ? data.sunset : data.moonset}</span>
                </p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "10px",
                    right: "1rem",
                    bottom: "2rem",
                    color: "#444",
                    fontWeight: "500",
                  }}
                >
                  {data.isDay === 1 ? "Sunrise" : "Moonrise"} <span style={{ color: "#222" }}>{data.isDay === 1 ? data.sunrise : data.moonrise}</span>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Days;
