import {API_URL} from './config.js'

export default () => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/get-rule`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      }}).then(response => {
        if (response.ok) {
          return response.json();
          } else {
          return response.text().then((error) => {
              throw new Error(error);
          });
          }
      })
}
