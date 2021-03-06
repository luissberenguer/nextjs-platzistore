import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    console.log('🚀 ~ file: useFetch.js ~ line 9 ~ fetchData ~ response', response);

    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
