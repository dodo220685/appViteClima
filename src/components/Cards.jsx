import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, showData, clima, forecast}) => { 
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()+1
    const year = today.getFullYear()
    const date = day + "/" + month + "/" + year

    let url = ""
    let icono = ""
    let cityTime = ""
    let sunrise = ""
    let sunset = ""
    

    if(loadingData){
        return <Spinner />
    }

    
    
    if(showData){
        url = "http://openweathermap.org/img/w/"
        icono = url + clima.weather[0].icon + ".png"

        const localTime = new Date().getTime()
        const localOffset = new Date().getTimezoneOffset() * 60000
        const currentUtcTime = localOffset + localTime
        const cityOffset = currentUtcTime + 1000 * clima.timezone
        cityTime = new Date(cityOffset).toTimeString().split(' ')
        console.log(cityTime[0]);

    
    
        const sunriseOffset = 1000 * clima.sys.sunrise
        sunrise = new Date(sunriseOffset).toTimeString().split(' ')
        console.log (sunrise[0])

        const sunsetOffset = 1000* clima.sys.sunset
        sunset = new Date(sunsetOffset).toTimeString().split(' ')
        console.log (sunset[0])
    }

    
    
    return (
        <div className="mt-5">
            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h2 className="card-title">{clima.name}, {clima.sys.country}</h2>
                                    <h4 className="card-date">Fecha: {date}</h4>
                                    <h4 className="card-date2">Hora Local: {cityTime[0]}</h4>
                                    <h1 className="card-temp">{(clima.main.temp - 273.15).toFixed(1)} °C</h1>
                                    <p className="card-desc">
                                        <img src={icono} alt="icono" />
                                        {clima.weather[0].description}
                                    </p>

                                    <img src="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid rounded-start imagen"/>



                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-5">
                                        <h5 className="card-text"> Temperatura Máxima:{(clima.main.temp_max - 273.15).toFixed(1)} °C </h5>
                                        <h5 className="card-text"> Temperatura Mínima:{(clima.main.temp_min - 273.15).toFixed(1)} °C </h5>
                                        <h5 className="card-text"> Sensación Térmica:{(clima.main.feels_like - 273.15).toFixed(1)} °C </h5>
                                        <h5 className="card-text"> Húmedad:{clima.main.humidity} % </h5>
                                        <h5 className="card-text"> Viento: {clima.wind.speed} m/s</h5>
                                    </div>
                                    <hr />
                                    <div className="card-body text-start mt-5">
                                        
                                        <h5 className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg> Salida del Sol : {sunrise[0]}  </h5>
                                        
                                        <h5 className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunset-fill" viewBox="0 0 16 16">
  <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg> Puesta del Sol: {sunset[0]}  </h5>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>

                ): (
                    <h2 className="text-light"> No hay Datos</h2>
                )
            }


        </div>

    )
}

export default Card