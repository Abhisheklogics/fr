import axios from "axios";


export const getAllData = async (url, params) => {
    try {
      if(params == '')
      {
        const response = await axios.get(url);
        return response.data;
      }
      else
      {
        const response = await axios.get(url, { params });
        return response.data;
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };