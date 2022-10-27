import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "./store";
import * as API from "./api";

const Form = () => {
  // ** Context
  const { persistUser, setCurrentUser } = useContext(AuthContext);

  // ** State
  const [username, setUsername] = useState("grillkorv");
  const [password, setPassword] = useState("bananpaj");

  // ** Actions
  const submitLogin = async () => {
    try {
      const user = await API.authenticate(username, password);
      persistUser(user);
    } catch (error) {
      console.log(error);
    }
    console.log("Try login with ", username, password);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
};

export default Form;
