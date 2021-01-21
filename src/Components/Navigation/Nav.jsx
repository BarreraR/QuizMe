import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(){
  return(
    <ul>
      <NavLink to='/login' className='Nav_Button'>
        Login
      </NavLink>
      <NavLink to='/register' className='Nav_Button'>
        Register
      </NavLink>
      <NavLink to='/dashboard' className='Nav_Button'>
        Home
      </NavLink>      
      <NavLink to='/admin' className='Nav_Button'>
        Admin 
      </NavLink>
      <NavLink to='/' className='Nav_Button'>
        Sign Out
      </NavLink>
    </ul>
  );
}