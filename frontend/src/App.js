import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const registered = {
      fullName: fullName,
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/app/signup", registered)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="mb-3">
            <label>username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
