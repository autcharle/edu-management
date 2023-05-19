import {API_URL} from './config.js'

export default (studentID,classID) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/update-student-class`, {
    method: 'PUT',
    headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      "studentID": `${studentID}`,
      "classID": `${classID}`
    })}).then(response => {
      if (response.ok) {
        return response.json();
        } else {
        return response.text().then((error) => {
            throw new Error(error);
        });
        }
    })
}
