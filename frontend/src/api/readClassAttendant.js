import { API_URL } from "./config"


export default (id) => {
  const token = localStorage.getItem("token");
    if(id != "")
    {return fetch(`${API_URL}/get-class-attendant`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "classID": `${id}`
      })
    })
      .then(response => response.json())}
    else{
      return fetch(`${API_URL}/get-class-attendant`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Login failed')
          }
        })
    }
}