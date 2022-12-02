import axios from "axios";

// an instance of the Axios driver. Used everywhere for API calls
const instance = axios.create({
  // http://35.209.74.28:4000/api
  baseURL: "http://34.121.142.82:8080/api",
  headers: {
    "Content-Type": "application/json",
  }
});

export default instance;