import React from 'react'
import thunderStorm from '../../images/bolt-solid.svg'
import drizzle from '../../images/cloud-rain-solid.svg'
import rain from '../../images/cloud-showers-heavy-solid.svg'
import snow from '../../images/snowflake-regular.svg'
import atmosphere from '../../images/smog-solid.svg'
import sunny from '../../images/sun-regular.svg'
import cloudy from '../../images/cloud-solid.svg'
// import moment from 'moment'


class DayForecast extends React.Component {
    state = { 
        
      }

    componentDidMount() {
        const weather = this.props.weather
        console.log('check this', weather)
        this.getMaxMin(weather)
        this.setState({
             //dates: weather[0].moment()dt_txt,
             weatherType:weather[0].weather[0].main,
             windCondition: weather[0].wind.speed,
             humidity: weather[0].main.humidity
        
            
        }, () => {
            console.log('MERRY CHRISTMAS FOR ME', this.state.dates)
            console.log('hello world', this.state.weatherType)
            console.log('HELLO ONCE AGAIN', this.state.windCondition)
            console.log('HAPPY FRIDAY', this.state.humidity)
        })
    }

    getMaxMin = (array) => {
        // console.log('days weather', array)
        let lowest = 100;
        let highest = 0;
        let tmp;
        for (var i=0; i < array.length; i++) {
            tmp = array[i].main.temp;
            tmp = tmp * (9 / 5) - 459.67;
            if (tmp < lowest) lowest = tmp;
            if (tmp > highest) highest = tmp;
        }
        console.log('day high', highest, 'day low', lowest);
        this.setState({
            highTemp: highest.toFixed(0),
            lowTemp: lowest.toFixed(0)
    
        })
    }

    getIcon = (x) => {
        console.log('check if', x)
        if (x === "Clear") {
            return <img src={sunny} alt='sunny'/>
        }
        if (x === "Clouds") {
            return <img src={cloudy} alt='cloudy'/>
        }
        if (x === "Mist") {
            return <img src={atmosphere} alt='atmosphere'/>
        }
        if (x === "Snow") {
            return <img src={snow} alt='snowing'/>
        }
        if (x === "Thunderstorm") {
            return <img src={thunderStorm} alt='thunder'/>
        }
        if (x === "Rain") {
            return <img src={rain} alt='rain'/>
        }
        if (x === "Drizzle") {
            return <img src={drizzle} alt='drizzle'/>
        }
        else {
            return "Warning: XoX"
        }
    }
    
    render() {
        return (
            <div>
                 {this.getIcon(this.state.weatherType)} 
                 <p>Hi: {this.state.highTemp}</p>
                 <p>Lo: {this.state.lowTemp}</p>
                 <p>Wind: {this.state.windCondition}</p>
                 <p>Humidity: {this.state.humidity} %</p>
            </div>
            
        )
    }
}
    
export default DayForecast

    
        
        
    

