import './App.css';
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Admin from './Routes/Admin';
import Quiz from './Routes/Quiz';
import QuizCategory from './Routes/QuizCategory';
import Nav from './Components/Navigation/Nav';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/dashboard' className='Header_Link'>
          <h1>QuizMe</h1>
        </Link>
        <Nav />
      </header>
      <main className='Main'>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/login' component={Login}/>
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
