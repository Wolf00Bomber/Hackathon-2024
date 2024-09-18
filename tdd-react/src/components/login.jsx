import React, { useState } from "react";
import Dashboard from "./dashboard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail((prev) => event?.target?.value);
  };

  const onChangePassword = (event) => {
    setPassword((prev) => event?.target?.value);
  };

  const [status, setStatus] = useState(false);

  const validateCredentials = () => {
    if (email === "test-email@email.com" && password === "test-password-value") {
      return true;
    }
    return false;
  }

  const onLogin = () => {
    const isValid = validateCredentials();
    setStatus(prev => isValid);
  };

  return (
    <div>
      <span data-testid="login-span-id">Login span id here</span>

      <div className="row">
        <label>Email</label>
        <input data-testid="email-id" type="text" onChange={onChangeEmail} value={email} />
      </div>

      <div className="row">
        <label>Password</label>
        <input data-testid="password-id" type="password" onChange={onChangePassword} value={password}/>
      </div>

      <button disabled={!email || !password} onClick={onLogin}>
        Login
      </button>

      <label data-testid="login-status-id" value={status}></label>

      {
        status &&
        <Dashboard />
      }
    </div>
  );
};

export default Login;