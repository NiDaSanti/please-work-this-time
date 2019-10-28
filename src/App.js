import React from 'react';
import Weather from './components/Weather'
import FormData from './components/FormData'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import FiveDayForecast from './components/FiveDayForecast'

const API_KEY = "8344d85e6a5e4fef120ba16a34295611";
const NEW_API_KEY = "8c57dcc6ff663280af8e253b10826c32";
function fiveDayWeeklyForecast () {
  let currentDate = new Date()
      currentDate.getDay();
      currentDate.getDate();
      currentDate.getFullYear();

  let weekDay = new Array(7);  
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";
    let day = weekDay[currentDate.getDay()];

  let months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    let allMonths = months[currentDate.getMonth()];
    console.log(allMonths);
let fullYear = new Date();
console.log(fullYear);
let actualYear = currentDate.getFullYear();

}
console.log(fiveDayWeeklyForecast);

  
      
class App extends React.Component {
  state = {}

 getZipCode = (e)  => {
    let zipCode = e.target.elements.zipCode.value;
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
getFiveDayForecast = async (zipCode) => {
  const second_api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${NEW_API_KEY}`)
  const newData = await second_api_call.json();
  console.log(newData);
  
    this.setState({
      currentDate: newData.list[0].dt,
      currentTemperature: newData.list[0].main.temp.toFixed(0),
      windSpeed: newData.list[0].wind.speed,
      overallHumidity: newData.list[0].main.humidity,
      overallDescription: newData.list[0].weather[0].description,

      currentDate2: newData.list[8].dt,
      overallTemperature2: newData.list[8].main.temp.toFixed(0),
      windSpeed2: newData.list[8].wind.speed,
      overallHumidity2: newData.list[8].main.humidity,
      overallDescription2: newData.list[8].weather[0].description,

      currentDate3: newData.list[16].dt,
      overallTemperature3: newData.list[16].main.temp.toFixed(0),
      windSpeed3: newData.list[16].wind.speed,
      overallHumidity3: newData.list[16].main.humidity,
      overallDescription3: newData.list[16].weather[0].description,

      currentDate4: newData.list[24].dt,
      overallTemperature4: newData.list[24].main.temp.toFixed(0),
      windSpeed4: newData.list[24].wind.speed,
      overallHumidity4: newData.list[24].main.humidity,
      overallDescription4: newData.list[24].weather[0].description,

      currentDate5: newData.list[32].dt,
      overallTemperature5: newData.list[32].main.temp.toFixed(0),
      windSpeed5: newData.list[32].wind.speed,
      overallHumidity5: newData.list[32].main.humidity,
      overallDescription5: newData.list[32].weather[0].description
    }) 
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
  render() {
   return (
    <div className="App">
      <FormData getWeather={this.getWeather}
        getZipCode={this.getZipCode}
        getFiveDayForecast={this.getFiveDayForecast}
      />
      <Weather/>
      <WeatherDisplay
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        airPressure={this.state.pressure}
        error={this.state.error} />

      <FiveDayForecast
        currentDate={this.state.currentDate}
        windSpeed={this.state.windSpeed}
        currentTemperature={this.state.currentTemperature}
        overallDescription={this.state.overallDescription}
        overallHumidity={this.state.overallHumidity}

        currentDate2={this.state.currentDate2}
        windSpeed2={this.state.windSpeed2}
        overallTemperature2={this.state.overallTemperature2}
        overallDescription2={this.state.overallDescription2}
        overallHumidity2={this.state.overallHumidity2}

        currentDate3={this.state.currentDate3}
        windSpeed3={this.state.windSpeed3}
        overallTemperature3={this.state.overallTemperature3}
        overallDescription3={this.state.overallDescription3}
        overallHumidity3={this.state.overallHumidity3}

        currentDate4={this.state.currentDate4}
        windSpeed4={this.state.windSpeed4}
        overallTemperature4={this.state.overallTemperature4}
        overallDescription4={this.state.overallDescription4}
        overallHumidity4={this.state.overallHumidity4}

        currentDate5={this.state.currentDate5}
        windSpeed5={this.state.windSpeed5}
        overallTemperature5={this.state.overallTemperature5}
        overallDescription5={this.state.overallDescription5}
        overallHumidity5={this.state.overallHumidity5}
      />
    </div>
  );
 }
}

export default App;
    
    
                  
        





      
      


    
    
        
    
