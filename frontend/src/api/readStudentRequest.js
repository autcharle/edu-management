import { API_URL } from "./config"


export default (id) => {
  const token = localStorage.getItem("token");
    if(id != "")
    {return fetch(`${API_URL}/get-student`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "name": `${id}`
      })
    })
      .then(response => response.json())}
    else{
      return fetch(`${API_URL}/get-student`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
    }
}