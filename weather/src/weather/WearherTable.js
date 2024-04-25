import React, { useEffect, useState } from "react"
import axios from "axios";

const WeatherTable = () => {
    // const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://openweathermap.org/forecast5")
            .then((res)=>{
                console.log("res====", res)
            }).catch((err)=>{
                console.log("err====", err)
            })
        
    },[])

    const data=
        [
            {
                date: "23/4/2024",
                temp: "30deg",
                xx: "xx.xx",
                pressure: "XX.XX",
                humidity:"XX.XX"
            },
            {
                date: "23/4/2024",
                temp: "30deg",
                xx: "xx.xx",
                pressure: "XX.XX",
                humidity:"XX.XX"
            },
            {
                date: "23/4/2024",
                temp: "30deg",
                xx: "xx.xx",
                pressure: "XX.XX",
                humidity:"XX.XX"
            },
            {
                date: "23/4/2024",
                temp: "30deg",
                xx: "xx.xx",
                pressure: "XX.XX",
                humidity:"XX.XX"
            },
        ]

    return(
       
        <div className="weather_table">
         {data.map((e,i)=>{
            return(
                <div style={{width:"100%", border: "1px solid #000" }}>
                    <div className="data-date">
                        <p>Date:{e.date}</p>
                    </div>
                    <div className="data-temp">
                        <p>Temperature</p>
                    </div>
                    <div className="data_filled">
                        <p>Min</p>
                        <p>Max</p>
                    </div>
                    <div className="data_filled">
                        <p>XX.XX</p>
                        <p>XX.XX</p>
                    </div>
                    <div className="data_filled">
                        <p>Pressure</p>
                        <p>{e.pressure}</p>
                    </div>
                    <div className="data_filled">
                        <p>Eumidity</p>
                        <p>{e.humidity}</p>
                    </div>
                
               
              </div>
            )
            }      
        )}
        </div>
    )
}
export default WeatherTable

