import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use the API base URL from the .env file
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Set a timeout for requests (optional)
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Add the token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const skipResponseInterceptor = error.config?.skipResponseInterceptor;

    if (!skipResponseInterceptor && error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else if (error.response?.status === 404) {
      window.location.href = "/not-found"; // Redirect to the 404 page
    }
    return Promise.reject(error);
  }
);

export default apiClient;
