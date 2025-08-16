// src/utils/customFetch.js
import axios from "axios";

// trim one trailing slash (if any)
const ORIGIN = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

// when VITE_API_URL is set (Render), use https://.../api/v1
// when it's not set (local server + Vite proxy), fall back to /api/v1
const baseURL = ORIGIN ? `${ORIGIN}/api/v1` : "/api/v1";

const customFetch = axios.create({
  baseURL,
  withCredentials: true, // keep cookies flowing
});

export default customFetch;
