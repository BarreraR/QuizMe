import './App.css';
import Dashboard from './Routes/Dashboard';
// import Login from './Routes/Login';
// import Register from './Routes/Register';
import Admin from './Routes/Admin';
import Quiz from './Routes/Quiz';
import QuizCategory from './Routes/QuizCategory';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QuizMe</h1>
      </header>
      <main className='Main'>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
          {/* <Route path='/login' component={Login}/> */}
          {/* <Route path='/register' component={Register}/> */}
          <Route path='/categories' component={QuizCategory}/>
          <Route path='/quiz' component={Quiz}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
