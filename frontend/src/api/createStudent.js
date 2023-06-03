import { API_URL } from "./config.js";

export default (name, gender, birth, address, email) => {
  const token = localStorage.getItem("token");
  return fetch(`${API_URL}/create-student`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      gender,
      birth,
      address,
      email,
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
