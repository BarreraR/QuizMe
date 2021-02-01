import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Admin from './Routes/Admin';
import Quiz from './Routes/Quiz';
import QuizCategory from './Routes/QuizCategory';
import Nav from './Components/Navigation/Nav';
import { Route, Switch, Link } from 'react-router-dom';
import TokenService from './Services/token-service';

function App() {
  const [ hasToken, setHasToken ] = useState(false);

  function handleLogin(){
    setHasToken(TokenService.hasAuthToken());
  }

  useEffect(() => {
    handleLogin();
  })

  return (
    <div className="App">
      <header className="App-header">
        <Link to={hasToken?'/dashboard':'/'} className='Header_Link'>
          <h1>QuizMe</h1>
        </Link>
        <Nav handleLogin={()=>handleLogin()}/>
      </header>
      <main className='Main'>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/login'>
            <Login handleLogin={()=>handleLogin()}/>
          </Route>
          <Route path='/register' component={Register}/>
          <Route path='/categories' component={QuizCategory}/>
          <Route path='/quiz' component={Quiz}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
