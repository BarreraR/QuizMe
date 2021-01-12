import './Dashboard.css';
import Results from '../Components/Results';
import { useHistory } from 'react-router-dom'; 

export default function Dashboard(){
  let history = useHistory();

  const startQuiz = () =>  {
    history.push('/quiz')
  }

  return(
    <div className='Dashboard'>
      <h2>
        Welcome, User!
      </h2>
      <p>Begin Quizzing yourself.</p>
      <div className='Start_Quiz'>
        <button onClick={() => startQuiz()}>Start Comprehensive Quiz</button>
        <button>Select Quiz Category</button>
      </div>
      <Results />
    </div>
  );

}