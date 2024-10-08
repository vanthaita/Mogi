import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://192.168.1.4:3001/api/v1',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  async (config) => {
    // console.log("test: ", access_token?.accessToken);
    // if (access_token) {
    //   config.headers.Cookie = `access_token=${access_token.accessToken}`;
    //   console.log("Test: ",config.headers.Cookie);
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes globally
    if (error.response) {
      if (error.response.status === 401) {
        // Unauthorized access - perhaps logout user
        console.log('Unauthorized, logging out...');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;