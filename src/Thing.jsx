import React, { useContext } from "react";
import { AuthContext } from "./store";

const Thing = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div>
      <p>{currentUser && <>Logged in as {currentUser.username}</>}</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Thing;
