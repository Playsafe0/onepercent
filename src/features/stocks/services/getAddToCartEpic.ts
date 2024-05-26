import axios from 'axios';

const getAddToCart = async (data: any, deletetheItem: boolean) => {
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/stock-overview',
    headers: {
      'X-RapidAPI-Key': 'd91701ac78msh99954b94910e0cfp19c223jsn135d9e84a14c',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
  try {
    //   const response = await axios.request(options); // Ideally we should make an API call here and fetch the data and return the reponse to epic,
    const response = {
      data: deletetheItem ? {} : data
    }
    return response
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getAddToCart;