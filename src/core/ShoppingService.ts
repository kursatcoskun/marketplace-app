import axios from "axios";

const apiUrl = "http://localhost:3001";

export function getItems() {
  return axios.get(`${apiUrl}/items`);
}
export function getCompanies() {
  return axios.get(`${apiUrl}/companies`);
}
