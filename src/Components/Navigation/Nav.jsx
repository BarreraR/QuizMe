import { NavLink } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import './Nav.css';

export default function Nav(props){
  function handleSignOut(){
    TokenService.clearAuthToken();
    props.handleLogin();
  }

  return(
    <ul>
      {TokenService.hasAuthToken() && 
        <>
          <NavLink to='/dashboard' className='Nav_Button'>
            Home
          </NavLink>      
          {TokenService.parseAuthToken().admin &&
            <NavLink to='/admin' className='Nav_Button'>
              Admin 
            </NavLink>
          }
          <NavLink to='/' className='Nav_Button' onClick={()=>handleSignOut()}>
            Sign Out
          </NavLink>
        </>
      }

      {!TokenService.hasAuthToken() && 
        <>
          <NavLink to='/login' className='Nav_Button'>
            Login
          </NavLink>
          <NavLink to='/register' className='Nav_Button'>
            Register
          </NavLink>
        </>
      }
      
      
    </ul>
  );
}