import { useState } from "react"; 

export default function Details() {
    const apikey = '930416016fcedb28c0ada7df12206894';
    // const baseurl= "https://api.openweathermap.org/data/2.5/";

    const [weatherdata,setweahterdata] = useState([{}]);
    const [city,setCity]= useState("");

    const getWeather = (event) =>{
        if (event.key == "Enter")
        {
            fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`).then(
                response => response.json () 
            ).then (
                data => {
                    setweahterdata(data)
                    setCity("")

                }
            )
        }
    }
  return (
    <div className='min-h-screen bg-slate-700 flex flex-col justify-center items-center gap-8 '>
        <h1 className="animate-bounce underline underline-offset-2  font-bold text-8xl text-orange-400 font-serif">Weather App !!</h1>
      <input
      className='px-8 py-2 rounded-lg bg-orange-200 hover:bg-orange-300 mt-24 border-orange-400 border-2 '
      placeholder='Enter the city...'
      onChange={e => setCity(e.target.value)}
      value ={city}
      onKeyPress={getWeather}
      />
        {typeof weatherdata.main === 'undefined' ? (
            <div>
                <p className="font-bold text-4xl text-orange-400 font-serif mt-4" > 
                Press enter City for weather ☻
                </p>
            </div>
        ):(
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-4xl text-orange-400 font-serif mt-4" >{weatherdata.name}</p>
                <p className="font-bold text-4xl text-orange-400 font-serif mt-4" >{Math.round((weatherdata.main.temp-32)*0.6)}°C</p>
                <p className="mt-4 font-bold text-4xl text-orange-400 font-serif" >{weatherdata.weather[0].main}</p>
            </div>
        )}
    </div>
  )
}
