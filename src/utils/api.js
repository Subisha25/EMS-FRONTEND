import axios from "axios";

// 🔹 Common axios instance
const API = axios.create({
  baseURL: "http://localhost/EMS-backend/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const UPLOADS_BASE_URL = "http://localhost/EMS-backend/uploads/";


export default API;
