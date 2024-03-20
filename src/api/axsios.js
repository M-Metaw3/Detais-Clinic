import axios from "axios";

// Server URL
 const axiosBaseUrl = axios.create({baseURL: "http://localhost:3111"});
//  const axiosBaseUrl = axios.create({baseURL: "https://tough-ox-hospital-gown.cyclic.app"});

// const axiosBaseUrl = axios.create({baseURL: "https://e-commerce-9kwf.onrender.com/api"});


export default axiosBaseUrl;
