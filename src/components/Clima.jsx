import React, {useState} from "react";
import Form from "./Form";
import Card from "./Cards";

const Clima = () => {
   
    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=37e8a3296c69ddc716adac67218ef56c&lang=es"
    let cityUrl = "&q="

    let urlForecast= "https://api.openweathermap.org/data/2.5/forecast?appid=37e8a3296c69ddc716adac67218ef56c&lang=es"
    
    const [clima, setClima] = useState ([]);
    const [forecast, setForecast] = useState ([]);
    const [loading, setLoading] = useState (false);
    const [show, setShow] = useState (false);
    const [location, setLocation] = useState ("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        urlClima = urlClima + cityUrl + loc

        await fetch(urlClima).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
        }).then ((infoClima) => {
            console.log(infoClima)
            setClima(infoClima);
        }).catch (error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        } )

        //forecast

        urlForecast = urlForecast + cityUrl + loc

        await fetch(urlForecast).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();
        }).then ((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading (false)
            setShow (true)

        }).catch (error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        } )
    }
    return (
        <React.Fragment>
        <Form 

            newLocation = {getLocation}
            />

        <Card 
            showData = {show}
            loadingData = {loading}
            clima = {clima}
            forecast = {forecast}
        />
        
        
        </React.Fragment>

    )
}

export default Clima