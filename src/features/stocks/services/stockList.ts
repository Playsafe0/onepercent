import axios from 'axios';

const stockList = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/market-trends',
    params: {
      trend_type: 'GAINERS',
      country: 'us',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd91701ac78msh99954b94910e0cfp19c223jsn135d9e84a14c',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };

  try {
    // const response = await axios.request(options);  MAKE AN API CALL HERE and get response
    const response = {
      data: {
        trends: [
          {
            symbol: 'AMD',
            name: 'Advanced Micro Devices.Inc',
            price: '200',
            change: '2.09'
          },
          {
            symbol: 'AAPl',
            name: 'Apple.Inc',
            price: '3048',
            change: '3.02'
          },
          {
            symbol: 'FB',
            name: 'Meta',
            price: '1005',
            change: '1.02'
          },
          {
            symbol: 'Google',
            name: 'Alphabet.com',
            price: '765',
            change: '5.2'
          },
          {
            symbol: '1%',
            name: 'The One Percent Club',
            price: '700',
            change: '15.02'
          },
          {
            symbol: 'MS',
            name: 'Microsoft Office',
            price: '188',
            change: '3.02'
          },
          {
            symbol: 'FB',
            name: 'Meta',
            price: '188',
            change: '3.02'
          },
          {
            symbol: 'Google',
            name: 'Alphabet.com',
            price: '188',
            change: '3.02'
          },
          {
            symbol: '1%',
            name: 'The One Percent Club',
            price: '188',
            change: '3.02'
          },
          {
            symbol: 'MS',
            name: 'Microsoft Office',
            price: '188',
            change: '3.02'
          },
          {
            symbol: 'AMD',
            name: 'Advanced Micro Devices.Inc',
            price: '200',
            change: '2.09'
          },
          {
            symbol: 'AAPl',
            name: 'Apple.Inc',
            price: '3048',
            change: '3.02'
          },
          {
            symbol: 'FB',
            name: 'Meta',
            price: '1005',
            change: '1.02'
          },
          {
            symbol: 'Google',
            name: 'Alphabet.com',
            price: '765',
            change: '5.2'
          },
          {
            symbol: '1%',
            name: 'The One Percent Club',
            price: '700',
            change: '15.02'
          },
          {
            symbol: 'MS',
            name: 'Microsoft Office',
            price: '188',
            change: '3.02'
          },
          {
            symbol: 'FB',
            name: 'Meta',
            price: '188',
            change: '3.02'
          },
        ]
      }
    }
    return response
  } catch (error) {
    return error;
  }
};

export default stockList;