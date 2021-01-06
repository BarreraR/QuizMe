import './App.css';
import Question from './Components/Question';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QuizMe</h1>
      </header>
      <Question question='Question 1'/>
      <Question question='Question 2'/>
      <Question question='Question 3'/>
      <Question question='Question 4'/>
      <Question question='Question 5'/>
      
    </div>
  );
}

export default App;
