import { API_URL } from "./config.js";

export default (maxAge, minAge, maxClassAttendant, stdScore) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/update-rule`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      maxAge,
      minAge,
      maxClassAttendant,
      stdScore,
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
