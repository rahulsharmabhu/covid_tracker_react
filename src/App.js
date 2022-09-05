import React,{useEffect,useState} from "react";
import {Cards,Chart,CountryPicker} from './components';
import Styles from './App.module.css';
import { fetchData } from './api';

function App() {

  const [data,setData] = useState('');

  useEffect(() => {
   const data = async() =>{
      const response = await fetchData();
      setData(response);
   }
   data();
  }, [])
  
  return (
    <div className={Styles.container}>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
