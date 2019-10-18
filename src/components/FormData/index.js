import React from 'react'

const FormData = (props) => (
    <form className = "initial-form" onSubmit={props.getWeather}>
    <p className = "zip-code">Enter zip code</p>
    <input className = "type-zip" type = "text" name = "zipCode"></input>
    <button>Get Weather</button>
 </form>
)
export default FormData