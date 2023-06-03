import { API_URL } from "./config.js";

export default (subjectID, semester) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/get-report`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subjectID: `${subjectID}`,
      semester: `${semester}`,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.text().then((error) => {
        throw new Error(error);
      });
    }
  });
};
