import React from 'react'

const FormData = (props) => {
    console.log(props)
    return (
    <div className = "zipcode-container">
    {/* onSubmit={props.getWeather} */}
        <form className = "initial-form" onSubmit={(e) => props.getZipCode(e)} >
        <p className = "zip-code">Enter zip code:</p>
        <input className = "type-zip" type = "text" name = "zipCode"></input>
        <button className = "submit-button">Submit</button>
        </form>
    </div>
)}
export default FormData