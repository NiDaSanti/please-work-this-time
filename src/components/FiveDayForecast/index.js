import React from 'react'

const FiveDayForecast = (props) => (
    <div className = "five-day-container">
        <div className = "first-day-container">
            {props.currentDate && <p className = "current-time"> {props.currentDate}</p>}
        </div>
    </div>
)


export default FiveDayForecast