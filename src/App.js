import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Show from './Show';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
function App() {
  const [city,setCity]=useState();
  const [data,setData] = useState('delhi');
  const [weather, setWeather] = useState();
  useEffect(
    ()=>{
       const  f = async ()=>{
         const api= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=baedf42b1ca6df56e33abb43606bbe8c`;
        
        
         const response = await fetch(api);
         
         const resJSON = await response.json();
      
         setData(resJSON.main);
         setWeather( (resJSON.weather));
         console.log(data);
         
        
      } 
      f();
      
    }
  ,[city]);
  return (
    <div className="App">
          
          
          <div className="wrapper">
             <div className="wave"></div>
                 <div className='input-area'>
                    <input type='text' placeholder='Enter city' onChange={(e)=>{setCity(e.target.value); } }  />
                 </div>  
                 { ( data===undefined || weather===undefined)  ?(<div className='no'>No data  <SentimentVeryDissatisfiedIcon style={{fontSize:'5rem'}}/></div>) :(
                   <Show  city={city} temp={data.temp} minTemp={data.temp_min} maxTemp={data.temp_max} weather={weather[0].main} />
                 )}  
                 
              
          </div>
         
          <div className='author'>By <a href='https://ishubhamrana.github.io/' target='_blank'>Shubham Rana</a></div>  
    </div>
  );
}

export default App;
