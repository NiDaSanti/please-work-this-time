import React from 'react';
import FormData from './components/FormData'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
 import DayForecast from './components/FiveDayForecast'
// import Colors from './components/Colors'
//import Day from './components/Day'
import moment from 'moment';
import thunderStorm from './images/bolt-solid.svg'
import drizzle from './images/cloud-rain-solid.svg'
import rain from './images/cloud-showers-heavy-solid.svg'
import snow from './images/snowflake-regular.svg'
import atmosphere from './images/smog-solid.svg'
import sunny from './images/sun-regular.svg'
import cloudy from './images/cloud-solid.svg'

//import SvGIcons from './components/SvGIcons'
const API_KEY = "8344d85e6a5e4fef120ba16a34295611";
const NEW_API_KEY = "8c57dcc6ff663280af8e253b10826c32";

class App extends React.Component {
  state = {
    forecast: false
  }

  kelvinToFarenheit(k) {
    let kelvin = k - 273.15;
    let farenheit = kelvin * 9 / 5 + 32;
    let solution = Math.round(farenheit * 10) / 10;
    return solution;
  }
  
  getZipCode = (e)  => {
    let zipCode = e.target.elements.zipCode.value
    this.setState({zipCode}) 
    e.preventDefault()
    this.getWeather(zipCode)
    this.getFiveDayForecast(zipCode)
    // this.getMaxMin(zipCode)
  }
  
  getCurrentWeatherIcon = (data) => {
    console.log('weather condition', data);
    if(data.weather[0].id >= 200 && data.weather[0].id <= 232) {
      return thunderStorm
    }
    if(data.weather[0].id >= 300 && data.weather[0].id <= 321) {
      return drizzle
    }
    if(data.weather[0].id >= 500 && data.weather[0].id <= 531) {
      return rain
    }
    if(data.weather[0].id >= 600 && data.weather[0].id <= 622) {
      return snow
    }
    if(data.weather[0].id >= 701 && data.weather[0].id <= 781) {
      return atmosphere
    }
    if(data.weather[0].id === 800) {
      return sunny
    }
    if(data.weather[0].id >= 801 && data.weather[0].id <= 804) {
      console.log('cloudy',cloudy)
      return cloudy
    } 
  }
  
  getWeather = async (zipCode) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`)
    const data = await api_call.json();
    const kTemp = data.main.temp;
    const fTemp = kTemp * (9 / 5) - 459.67;
    console.log('hello everyone', data)
    
    if(zipCode) {        
      console.log()           
      this.setState({
        temperature: fTemp.toFixed(0),
        icon: this.getCurrentWeatherIcon(data),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        airPressure: data.main.pressure,
        error: ""
      }, () => {console.log(this.state.icon);})
      
    } else {
      this.setState({               
        error: "Enter a zip code."
      })
    }
  }
  
  getFiveDayForecast = async (zipCode) => {
    const second_api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${NEW_API_KEY}`)
    const newData = await second_api_call.json();
    let today = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];

    // console.log('what is', today)
    await newData.list.map ((i) => {
      
      if (moment(i.dt_txt).format('MM DD') === moment().format('MM DD')) {
        today.push(i)
      }
      if (moment(i.dt_txt).format('MM DD') === moment().add(1, 'Days').format('MM DD')) {
        day2.push(i) 
      }
      if (moment(i.dt_txt).format('MM DD') === moment().add(2, 'Days').format('MM DD')) {
        day3.push(i)
      }
      if (moment(i.dt_txt).format('MM DD') === moment().add(3, 'Days').format('MM DD')) {
        day4.push(i)
      }
      if (moment(i.dt_txt).format('MM DD') === moment().add(4, 'Days').format('MM DD')) {
        day5.push(i)
      }
      return i
    })

this.setState({
  today: today,
  day2: day2,
  day3: day3,
  day4: day4,
  day5: day5,
  })
 
}
render() {
    return (
    <div className="App">
      <FormData getWeather={this.getWeather}
        getZipCode={this.getZipCode}
        getFiveDayForecast={this.getFiveDayForecast}
      />

      {this.state.temperature && <WeatherDisplay
        temperature={this.state.temperature}
        icon={this.state.icon}
        currentWeatherIcon={this.state.currentWeatherIcon}
        city={this.state.city}
        country={this.state.country} 
        humidity={this.state.humidity} 
        description={this.state.description}
        airPressure={this.state.pressure}
        error={this.state.error} 
        /> }
        
      {this.state.today && 
      <ul>
      <DayForecast
          weather={this.state.today}
      />
       <DayForecast
          weather={this.state.day2}
      />
       <DayForecast
          weather={this.state.day3}
      />
       <DayForecast
          weather={this.state.day4}
      />
       <DayForecast
          weather={this.state.day5}
      />
      </ul> }
      </div> 
      );
    }
  }

export default App;

    
    
                  
        





      
      


    
    
        
    
