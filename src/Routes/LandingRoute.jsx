import TokenService from '../Services/token-service';
import AuthService from '../Services/auth-api-service';
import { useHistory } from "react-router-dom";

export default function LandingRoute(props){
  const history = useHistory();

  function loginAsAdmin(){
    const user = { username: 'admin', password: 'pass' };
    AuthService.postLogin(user)
      .then((res)=>{
        TokenService.saveAuthToken(res.authToken);
        history.push(
          {
            pathname: '/dashboard'
          }
        );
        props.handleLogin();
      })
  }

  return (
    <section>
      <h2>Welcome</h2>
      <p>This application stores quiz categories, questions, 
        and user answers to collect data and allow administrators 
        of the web page to create informed decisions about their 
        teaching practices based on student's responses. User 
        registration and login required. Once logged in, token 
        is provided which contains user information and whether 
        a user is an admin. Without the token, an unauthorized 
        request message will be returned.</p>

      <button onClick={()=>loginAsAdmin()}>Click here to test admin account</button>
    </section>
  ); 
}
