import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

interface UserType {
  id: string;
  name: string;
  age: string;
}

const App = () => {
  const [usersList, setUsersList] = useState<UserType[]>([]);

  const addUserHandler = (newUser: UserType) => {
    setUsersList((prevUsersList) => [newUser, ...prevUsersList]);
  };

  const deleteUserHandler = (id: string) => {
    setUsersList((prevUsersList) =>
      prevUsersList.filter((user) => user.id !== id)
    );
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
};

export default App;
