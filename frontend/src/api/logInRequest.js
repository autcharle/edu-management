import {API_URL} from './config.js'


export default (username, password) => {
    return fetch (`${API_URL}/login`,{
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',
        },
    body: JSON.stringify({
        username,
        password
        })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
        } else {
        return response.text().then((error) => {
            throw new Error(error);
        });
        }
    })
}

