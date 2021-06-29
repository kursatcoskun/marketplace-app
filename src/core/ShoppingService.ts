import axios from "axios";

const apiUrl = "https://json-server-marketplace-app.herokuapp.com";

export function getItems() {
  return axios.get(`${apiUrl}/items`);
}
export function getCompanies() {
  return axios.get(`${apiUrl}/companies`);
}
