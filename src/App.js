import './App.css';
import Cards from './components/Cards/Cards';
import {fetchData} from './API/index';
import {useState, useEffect} from 'react';


function App() {
const [data, setData] = useState({});

useEffect(()=> {
    const getGlobalData = async() => {
      const dataResponse = await fetchData();
      setData(dataResponse);
      
      }
      getGlobalData();
},[])


  return (
    <div className='container'>
      <Cards data ={data}/>
    </div>
  );
}

export default App;
