import {API_URL} from './config.js'

export default (classID,subjectID,semester) => {
  const token = localStorage.getItem("token");
    return fetch(`${API_URL}/get-score`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "classID": `${classID}`,
        "subjectID": `${subjectID}`,
        "Semester":`${semester}`
      })
    })
      .then(response => response.json())
}
