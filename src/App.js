import './App.css';
// import Question from './Components/Question';
import Dashboard from './Routes/Dashboard';
// import Login from './Routes/Login';
// import Register from './Routes/Register';
import Quiz from './Routes/Quiz';
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
          <Route path='/quiz' component={Quiz}/>
        </Switch>
      </main>

      {/* <Question question='Question 1'/>
      <Question question='Question 2'/>
      <Question question='Question 3'/>
      <Question question='Question 4'/>
      <Question question='Question 5'/> */}
      
    </div>
  );
}

export default App;
