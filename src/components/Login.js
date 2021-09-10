import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import "./Login1.css";
import { Radio } from "antd";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [sex, setSex] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e, value) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: pwd,
        loggedIn: true,
        sex: sex,
      })
    );
  };
  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter the password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <div style={{ margin: "15px 3px" }}>
          <h3>Sex</h3>
          <Radio.Group onChange={(e) => setSex(e.target.value)} value={sex}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </div>

        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
