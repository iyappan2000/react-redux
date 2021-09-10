import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;
