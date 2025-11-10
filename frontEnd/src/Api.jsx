import Axios from 'axios'

const Api=Axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export default Api;