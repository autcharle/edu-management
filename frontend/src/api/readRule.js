import { API_URL } from "./config"


export default (token) => {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1biI6ImFkbWluIiwicHciOiJhYmMiLCJpYXQiOjE2ODM0NzM0MDl9.LQBrcED0NwuAPQs1ly--djD60K4ecHkC0muO9tqaKss";
  return fetch(`${API_URL}/get-rule`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      }}).then(response => response.json())
}