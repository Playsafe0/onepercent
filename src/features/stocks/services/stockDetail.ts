import axios from 'axios';

const stockDetail = async (symbol: string) => {
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/stock-overview',
    params: {
      symbol: `'${symbol}'`,
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd91701ac78msh99954b94910e0cfp19c223jsn135d9e84a14c',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
  try {
    //   const response = await axios.request(options); // Ideally we should make an API call here and fetch the data and return the reponse to epic,
    const response = {
      data: {
        data: {
          symbol: 'AMD',
          name: 'Advanced Micro Devices.Inc',
          price: '200',
          change: '2.09',
          about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
      }
    }
    return response
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default stockDetail;