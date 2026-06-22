import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

// Axios instance (create once)
const instance = axios.create({
  baseURL: "https://the-local-food-lover-network-server.onrender.com",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    // ===== Request Interceptor =====
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        const token = user?.accessToken;

        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // ===== Response Interceptor =====
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          try {
            await logout();
            navigate("/login");
          } catch (err) {
            console.error("Logout error:", err);
          }
        }

        return Promise.reject(error);
      }
    );

    // ===== Cleanup =====
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logout, navigate]);

  return instance;
};

export default useAxiosSecure;