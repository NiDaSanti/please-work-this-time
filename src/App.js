import React from 'react';
import FormData from './components/FormData'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import FiveDayForecast from './components/FiveDayForecast'
import moment from 'moment';
import thunderStorm from './images/bolt-solid.svg'
import drizzle from './images/cloud-rain-solid.svg'
import rain from './images/cloud-showers-heavy-solid.svg'
import snow from './images/snowflake-regular.svg'
import atmosphere from './images/smog-solid.svg'
import sunny from './images/sun-regular.svg'
import cloudy from './images/cloud-solid.svg'

const API_KEY = "8344d85e6a5e4fef120ba16a34295611";
const NEW_API_KEY = "8c57dcc6ff663280af8e253b10826c32";

class App extends React.Component {
  state = { newList: [] }
  
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
  }

   getWeather = async (zipCode) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`)
    const data = await api_call.json();
    const kTemp = data.main.temp;
    const fTemp = kTemp * (9 / 5) - 459.67;
    console.log('hello everyone', data)

    let SvgIcons = {
      thunderStorm,
      drizzle,
      rain,
      snow,
      atmosphere,
      sunny,
      cloudy
    }
   
    this.getCurrentWeatherIcon = () => {
      if(data.weather[0].id >= 200 && data.weather[0].id <= 232) {
        return thunderStorm
      }
      if(data.weather[0].id >= 300 & data.weather[0].id <= 321) {
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
        return cloudy
      } else {
        return "Cannot read"
      }
      
    }
   // console.log('Today is the', this.getCurrentWeatherIcon(SvgIcons))
    
    if(zipCode) {                   // if true, then display the setState, 
     this.setState({
     temperature: fTemp.toFixed(0),
     icon: this.getCurrentWeatherIcon(SvgIcons),
     city: data.name,
     country: data.sys.country,
     humidity: data.main.humidity,
     description: data.weather[0].description,
     airPressure: data.main.pressure,
     
     error: ""
    })
    console.log(data);
  } else {
    this.setState({               // else, display error message
      error: "Enter a zip code."
    })
  }
}
 
getFiveDayForecast = async (zipCode) => {
  const second_api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${NEW_API_KEY}`)
  const newData = await second_api_call.json();

  let SvgIcons2 = {
    thunderStorm,
    drizzle,
    rain,
    snow,
    atmosphere,
    sunny,
    cloudy
  }

  let today = [];
  let day2 = [];
  let day3 = [];
  let day4 = [];
  let day5 = [];

  newData.list.map = ((i) => {
    console.log(i)
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

    // if (i.dt_txt === today + 2) {
    //   return day3.push(i)
    // }
    // if (i.dt_txt === today + 3) {
    //   return day4.push(i)
    // }
    // if (i.dt_txt === today + 4) {
    //   return day5.push(i)
    // }

  })

  this.getMinTemp = (array, max) => {
    max = 0;
    array.map = (item => {
      if(item.main.temp_max > max) {
        max = item.main.temp_max;
      }
    })
    return max
  }

  this.getMinTemp = (array, min) => {
    min = 400
    array.map = (item => {
      if(item.main.temp_max < min) {
        min = item.main.temp_min;
      }
    })
    return min
  }

  this.setState ({
    today: this.state.today.dt_txt,
    day2: this.state.day2.dt_txt,
    day3: this.state.day3.dt_txt,
    day4: this.state.day4.dt_txt,
    day5: this.state.day5.dt_txt
  })
  console.log('today',)
}

  render() {
    //console.log("HELLO", this.state.newList[0])
    return (
    <div className="App">
      <FormData getWeather={this.getWeather}
        getZipCode={this.getZipCode}
        getFiveDayForecast={this.getFiveDayForecast}
      />

      <WeatherDisplay
        temperature={this.state.temperature}
        icon={this.state.icon}
        currentWeatherIcon={this.state.currentWeatherIcon}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        airPressure={this.state.pressure}
        error={this.state.error} 
        />
        
        <FiveDayForecast
        
        today={this.state.today}
        icon={this.state.icon}
        windSpeed={this.state.windSpeed}
        currentTemperature={this.state.currentTemperature && this.kelvinToFarenheit(this.state.currentTemperature)}
        overallDescription={this.state.overallDescription}
        overallHumidity={this.state.overallHumidity}
        weatherIcon={this.state.weatherIcon}

        day2={this.state.day2}
        icon2={this.state.icon2}
        windSpeed2={this.state.windSpeed2}
        overallTemperature2={this.state.overallTemperature2 && this.kelvinToFarenheit(this.state.overallTemperature2)}
        overallDescription2={this.state.overallDescription2}
        overallHumidity2={this.state.overallHumidity2}
        weatherIcon2={this.state.weatherIcon}

        day3={this.state.day3}
        icon3={this.state.icon3}
        windSpeed3={this.state.windSpeed3}
        overallTemperature3={this.state.overallTemperature3 && this.kelvinToFarenheit(this.state.overallTemperature3)}
        overallDescription3={this.state.overallDescription3}
        overallHumidity3={this.state.overallHumidity3}

        day4={this.state.day4}
        icon4={this.state.icon4}
        windSpeed4={this.state.windSpeed4}
        overallTemperature4={this.state.overallTemperature4 && this.kelvinToFarenheit(this.state.overallTemperature4)}
        overallDescription4={this.state.overallDescription4}
        overallHumidity4={this.state.overallHumidity4}

        day5={this.state.day5}
        icon5={this.state.icon5}
        windSpeed5={this.state.windSpeed5}
        overallTemperature5={this.state.overallTemperature5 && this.kelvinToFarenheit(this.state.overallTemperature5)}
        overallDescription5={this.state.overallDescription5}
        overallHumidity5={this.state.overallHumidity5} 
      />
    </div>
  );
 }
}

export default App;
    
    
                  
        





      
      


    
    
        
    
