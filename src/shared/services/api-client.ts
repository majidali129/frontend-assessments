import axios from "axios";

const baseUrl: string = import.meta.env.VITE_FAKE_STORE_API_BASE_URI;

if (!baseUrl) {
  throw new Error(
    "VITE_FAKE_STORE_API_BASE_URI environment variable is not defined",
  );
}

export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
