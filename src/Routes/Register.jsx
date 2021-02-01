import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from "../Services/auth-api-service";
import TokenService from "../Services/token-service";

export default function RegisterMain() {
  const history = useHistory();
  const [errorMessage, setError] = useState(null);
  const [confPass, setConfPass] = useState('');
  const [pass, setPass] = useState('');

  function confPassEntered(e){
    setConfPass(e.target.value);
  }

  function passwordEntered(e){
    setPass(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if(pass !== confPass){
      return;
    }

    const { username, password, conf_password } = e.target;
    const user = {
      username: username.value,
      password: password.value,
      admin: 'false',
    };
    setError(null);

    AuthService.postUser(user)
      .then((res) => {
        username.value = "";
        password.value = "";
        conf_password.value = "";
        TokenService.saveAuthToken(res.authToken);
        history.push(
          {
            pathname: '/login'
          }
        );
      })
      .catch((res) => {
        username.value = "";
        password.value = "";
        conf_password.value = "";
        setError(res.error);
      });
  }
  
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} className='Register_Form'>
        <div role='alert'>
          {errorMessage && <p className='red'>{errorMessage}</p>}
        </div>

        <h2>Welcome</h2>
        <p>Please register to continue <br/> All fields required</p>
        <label htmlFor='username'>Username </label>
        <br/>
        <input id='username' type='text' placeholder='User1'/>
        <br/>
        <label htmlFor='password'>Password </label>
        <br/>
        <input id='password' type='password' placeholder='Password@1' onChange={e=>passwordEntered(e)}/>
        <br/>
        <label htmlFor='conf_password'>Confirm Password </label>
        <br/>
        <input id='conf_password' type='password' placeholder='Password@1' onChange={e=>confPassEntered(e)}/>
        {!(confPass===pass) && <><br/><span>*Passwords do not match*</span></>}
        <br/>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}