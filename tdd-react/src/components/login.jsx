import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail((prev) => event?.target?.value);
  };

  const onChangePassword = (event) => {
    setPassword((prev) => event?.target?.value);
  };

  const onLogin = () => {};

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
    </div>
  );
};

export default Login;