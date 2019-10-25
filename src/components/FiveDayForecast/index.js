import React from 'react'

const FiveDayForecast = (props) => (
    <div className = "five-day-container">
        <div className = "first-day-container">
            {props.currentDate && <p className = "current-time"> {props.currentDate}</p>}
            {props.overallDescription && <p className = "conditions">Conditions: {props.overallDescription}</p>}
            {props.currentTemperature && <p className = "current-temp">{props.currentTemperature}</p>}
            {props.windSpeed && <p className = "wind">{props.windSpeed}</p>} 
            {props.overallHumidity && <p className = "get-humid"> {props.overallHumidity}</p>}
        </div>
        <div className = "second-day-container">
            {props.currentDate2 && <p className = "current-time"> {props.currentDate2}</p>}
            {props.overallDescription2 && <p className = "conditions">Conditions: {props.overallDescription2}</p>}
            {props.overallTemperature2 && <p className = "current-temp">{props.overallTemperature2}</p>}
            {props.windSpeed2 && <p className = "wind">{props.windSpeed2}</p>}
            {props.overallHumidity2 && <p className = "get-humid">{props.overallHumidity2}</p>}
        </div>
        <div className = "third-day-container">
            {props.currentDate3 && <p className = "current-time"> {props.currentDate3}</p>}
            {props.overallDescription3 && <p className = "conditions">Conditions: {props.overallDescription3}</p>}
            {props.overallTemperature3 && <p className = "current-temp">{props.overallTemperature3}</p>}
            {props.windSpeed3 && <p className = "wind">{props.windSpeed3}</p>}
            {props.overallHumidity3 && <p className = "get-humid">{props.overallHumidity3}</p>}
        </div>
        <div className = "fourth-day-container">
            {props.currentDate4 && <p className = "current-time"> {props.currentDate4}</p>}
            {props.overallDescription4 && <p className = "conditions">Conditions: {props.overallDescription4}</p>}
            {props.overallTemperature4 && <p className = "current-temp">{props.overallTemperature4}</p>}
            {props.windSpeed4 && <p className = "wind">{props.windSpeed4}</p>}
            {props.overallHumidity4 && <p className = "get-humid">{props.overallHumidity4}</p>}
        </div>
        <div className = "fifth-day-container">
            {props.currentDate5 && <p className = "current-time"> {props.currentDate5}</p>}
            {props.overallDescription5 && <p className = "conditions">Conditions: {props.overallDescription5}</p>}
            {props.overallTemperature5 && <p className = "current-temp">{props.overallTemperature5}</p>}
            {props.windSpeed5 && <p className = "wind">{props.windSpeed5}</p>}
            {props.overallHumidity5 && <p className = "get-humid">{props.overallHumidity5}</p>}
        </div>
    </div>
)


export default FiveDayForecast