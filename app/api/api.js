const URL = "http://localhost:4000"

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },})



