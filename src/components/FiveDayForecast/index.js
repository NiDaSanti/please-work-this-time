import React from 'react'
// import thunderStorm from '../images/bolt-solid.svg'
// import drizzle from './images/cloud-rain-solid.svg'
// import rain from './images/cloud-showers-heavy-solid.svg'
// import snow from './images/snowflake-regular.svg'
// import atmosphere from './images/smog-solid.svg'
import sunny from '../../images/sun-regular.svg'
// import cloudy from './images/cloud-solid.svg'


class DayForecast extends React.Component {
    state = {
        
    }

    componentDidMount() {
        const weather = this.props.weather
        console.log('hell with', weather)
        this.getMaxMin(weather)
        this.setState({
            weatherType: weather[0].weather[0].main
        })
    }

    getMaxMin =(array) => {
        console.log('days weather', array)
        let lowest = 100;
        let highest = 0;
        let tmp;
        for (var i=0; i<array.length; i++) {
            tmp = array[i].main.temp;
            tmp = tmp * (9 / 5) - 459.67;
            if (tmp < lowest) lowest = tmp;
            if (tmp > highest) highest = tmp;
        }
        console.log('day high', highest, 'day low', lowest);
        this.setState({
            highTemp: highest,
            lowTemp: lowest
        })

    }

    getIcon = (x) => {
        if (x === "clear") {
            return <img src={sunny} />
        }
        if (x === "clear") {
            return  <img src={sunny} />
        }
        if (x === "clear") {
            return  <img src={sunny} />
        }
        if (x === "clear") {
            return  <img src={sunny} />
        }
        else {
            return  <img src={sunny} />
        }
    }
    
    render() {
        return (
            <div>
                { this.getIcon(this.state.weatherType)}
            </div>
        )
    }
}
    
export default DayForecast

    
        // <div className = "five-day-container">
        //  <div className = "first-day-container">
        //     {props.day1 && <p className = "current-time">{props.day1}</p>}
        //      <img src = {props.icon} alt = 'conditions'></img>
        //      {props.currentTemperature && <p className = "current-temp">{props.currentTemperature}</p>}
        //     {props.windSpeed && <p className = "wind">{props.windSpeed}</p>} 
        //      {props.overallHumidity && <p className = "get-humid"> {props.overallHumidity}</p>}
        //      {props.overallDescription && <p className = "conditions">Conditions: {props.overallDescription}</p>} 
        // </div>
        //   <div className = "second-day-container">
        //      {props.day2 && <p className = "current-time">{props.day2}</p>}
        //     <img className = 'style-condition' src =    {props.icon2} alt = 'conditions'></img>
        //       {props.overallTemperature2 && <p className = "current-temp">{props.overallTemperature2}</p>}
        //     {props.windSpeed2 && <p className = "wind">{props.windSpeed2}</p>}
        //     {props.overallHumidity2 && <p className = "get-humid">{props.overallHumidity2}</p>}
        //      {props.overallDescription2 && <p className = "conditions">Conditions: {props.overallDescription2}</p>}
        // </div>
        //  <div className = "third-day-container">
        //      {props.day3 && <p className = "current-time">{props.day3}</p>}
        //      <img className = 'style-condition' src = {props.icon3} alt = 'rain and clouds'></img>
        //      {props.overallTemperature3 && <p className = "current-temp">{props.overallTemperature3}</p>}
        //      {props.windSpeed3 && <p className = "wind">{props.windSpeed3}</p>}
        //      {props.overallHumidity3 && <p className = "get-humid">{props.overallHumidity3}</p>}
        //     {props.overallDescription3 && <p className = "conditions">Conditions: {props.overallDescription3}</p>}
        //  </div>
        // <div className = "fourth-day-container">
        //     {props.day4 && <p className = "current-time">{props.day4}</p>}
        //     <img className = 'style-condition' src = {props.icon4} alt = 'rain and clouds'></img>
        //      {props.overallTemperature4 && <p className = "current-temp">{props.overallTemperature4}</p>}
        //      {props.windSpeed4 && <p className = "wind">{props.windSpeed4}</p>}
        //  {props.overallHumidity4 && <p className = "get-humid">{props.overallHumidity4}</p>}
        //      {props.overallDescription4 && <p className = "conditions">Conditions: {props.overallDescription4}</p>}
        //  </div>
        //  <div className = "fifth-day-container">
        //      {props.day5 && <p className = "current-time">{props.day5}</p>}
        //      <img className = 'style-condition' src = {props.icon5} alt = 'rain and clouds'></img>
        //      {props.overallTemperature5 && <p className = "current-temp">{props.overallTemperature5}</p>}
        //      {props.windSpeed5 && <p className = "wind">{props.windSpeed5}</p>}
        //      {props.overallHumidity5 && <p className = "get-humid">{props.overallHumidity5}</p>}
        //      {props.overallDescription5 && <p className = "conditions">Conditions: {props.overallDescription5}</p>} 
        //  </div> 
        //  </div> 
        
    

