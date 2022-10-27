import axios from "axios";

export const authenticate = async (username, password) => {
  const response = await axios.post("http://localhost:8080/auth", {
    username,
    password,
  });
  return response.data;
};
