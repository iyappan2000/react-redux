import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "./Logout.css";
function Logout() {
  const user = useSelector(selectUser);
  return (
    <div className="logout">
      <h3>
        Name: <span className="names">{user.name}</span>
      </h3>
      <h3>
        Email: <span className="names">{user.email}</span>
      </h3>
      <h3>
        password: <span className="names">{user.password}</span>
      </h3>
      <h3>
        sex: <span className="names">{user.sex}</span>
      </h3>
    </div>
  );
}

export default Logout;
