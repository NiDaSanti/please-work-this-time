import React from 'react';
import Weather from './components/Weather'
import FormData from './components/FormData'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';

const API_KEY = "8344d85e6a5e4fef120ba16a34295611";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const zipCode = e.target.elements.zipCode.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`)
    const data = await api_call.json();

    if(zipCode) {                   // if true, then display the setState, else display nothing.
    console.log(data);

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Enter a zip code."
    })
  }
}

  render() {
   return (
    <div className="App">
      <FormData getWeather={this.getWeather}/>
      <Weather/>
      <WeatherDisplay
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidityi}
        description={this.state.description}
        error={this.state.error}
      />
    </div>
  );
 }
}

export default App;
