import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../Services/auth-api-service";
import TokenService from "../Services/token-service";

export default function LoginMain(props) {
  const history = useHistory();
  const [errorMessage, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setError(null);

    const { username, password } = e.target;

    const user = { username: username.value, password: password.value };

    AuthService.postLogin(user)
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        history.push(
          {
            pathname: '/dashboard'
          }
        );
        props.handleLogin();
      })
      .catch((res) => {
        username.value = "";
        password.value = "";
        setError(res.error);
      });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="Login_Form">

        <div role='alert'>
          {errorMessage && <p className='red'>{errorMessage}</p>}
        </div>

        <h2>Welcome</h2>
        <p>Please login to continue</p>

        <label htmlFor="username">Username </label>
        <input id="username" type="text" placeholder="User1" />
        <br />
        <label htmlFor="password">Password </label>
        <input id="password" type="password" placeholder="Password@1" />
        <br />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
