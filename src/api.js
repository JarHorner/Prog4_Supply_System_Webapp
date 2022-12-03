import axios from "axios";

// an instance of the Axios driver. Used everywhere for API calls
const instance = axios.create({
  // http://35.209.74.28:8080/api
  baseURL: "http://35.209.74.28:8080/api"
});

export default instance;