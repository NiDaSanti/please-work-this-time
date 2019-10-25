import React from 'react';
import Weather from './components/Weather'
import FormData from './components/FormData'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';

const API_KEY = "8344d85e6a5e4fef120ba16a34295611";
const NEW_API_KEY = "8c57dcc6ff663280af8e253b10826c32";

let currentDate = new Date()
      currentDate.getHours();
      currentDate.getMinutes();
      
      
class App extends React.Component {
  state = {}

 getZipCode = (e)  => {
    let zipCode = e.target.elements.zipCode.value;
    this.setState({zipCode}) 
    e.preventDefault()
    this.getWeather(zipCode)
    this.getFiveDayForecast(zipCode)
  }
  
  getFiveDayForecast = async (zipCode) => {
    const second_api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${NEW_API_KEY}`)
    const newData = await second_api_call.json();
    this.setState = {
      currentDate: newData.list.dt,
      temperature: newData.list.main.temp.temp_min.temp_max,
      windSpeed: newData.list.wind.speed,
      humidity: newData.list.main.humidity,
      descripion: newData.list.weather.descripion[0]
    }
    
    /*const DailyCard = ({ reading }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
    moment(newDate).format('dddd')
    moment(newDate).format('MMMM Do, h:mm a')*/
    /*console.log(newData);
    let daysOfTheWeek = [];
    for(let i = 0; i < 5; i++) {
      //console.log('yo',newData.list[i])
      daysOfTheWeek.push(newData.list[i])
      //})
    }*/
    //console.log('final array', daysOfTheWeek);
}
    getWeather = async (zipCode) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`)
    const data = await api_call.json();
    const kTemp = data.main.temp;
    const fTemp = kTemp * (9 / 5) - 459.67;
   
     if(zipCode) {                   // if true, then display the setState, 
      //console.log(data);
      this.setState({
      temperature: fTemp.toFixed(0),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      airPressure: data.main.pressure,
      error: ""
    })
    } else {
      this.setState({               // else, display error message
        error: "Enter a zip code."
    })
  }
}
  render() {
   return (
    <div className="App">
      <FormData getWeather={this.getWeather}
      getZipCode={this.getZipCode}/>
      <Weather/>
      <WeatherDisplay
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        airPressure={this.state.pressure}
        error={this.state.error}
      />
    </div>
  );
 }
}

export default App;
