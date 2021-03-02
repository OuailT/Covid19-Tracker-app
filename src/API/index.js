import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

//i should create a function who is going to fetch the data then i will
// to the APP

export const fetchData = async () => {
    try {
     const {data} = await axios.get(url);
    
     const modifiedData = {
        confirmed : data.confirmed,
        recovered : data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate,
     }
     return modifiedData;

    }
    
    catch(error) {
        return error;
    }

}

