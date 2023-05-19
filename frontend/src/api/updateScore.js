import {API_URL} from './config.js'

export default (v1,v2,v3,t1,t2,t3) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/create-score`, {
    method: 'POST',
    headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        "studentID":`${v1}`,
        "subjectID":`${v2}`,
        "Semester":`${v3}`,
        "HS1":`${t1}`,
        "HS2":`${t2}`,
        "HS3":`${t3}`
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
