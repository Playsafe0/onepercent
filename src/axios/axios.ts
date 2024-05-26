import Axios from 'axios' ;

const axios =Axios.create({
    baseURL : 'https://real-time-finance-data.p.rapidapi.com',
    timeout :10000,
    headers :{
        'X-RapidAPI-Key': 'd91701ac78msh99954b94910e0cfp19c223jsn135d9e84a14c',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
})

export default axios ;