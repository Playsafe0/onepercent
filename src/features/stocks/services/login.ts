import axios from 'axios';

const Login = async (data: any) => {
  try {
    //   const response = await axios.request(options); // Ideally we should make an API call here and fetch the data and return the reponse to epic,
    const response = {
      data: data
    }
    return response
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default Login;