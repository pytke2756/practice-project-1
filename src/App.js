import React, { useState } from "react";
// import React, { useState, Fragment } from "react";
// Be is lehet importálni és akkor nem kell a tagbe írni "React.Fragment"-et hanem elég a "Fragment"

// Ha üres tageket használok <> </> ez is a Fragmentet jelöli
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
