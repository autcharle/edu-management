import { API_URL } from "./config"


export default () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/get-rule`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      }}).then(response => response.json())
}