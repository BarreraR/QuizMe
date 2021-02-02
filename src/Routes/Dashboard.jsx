import './Dashboard.css';
import Results from '../Components/Dashboard/Results';
import { useHistory } from 'react-router-dom'; 

export default function Dashboard(props){
  let history = useHistory();

  const startQuiz = () =>  {
    history.push('/quiz');
  }

  function quizCategory(){
    history.push('/categories');
  }

  return(
    <div className='Dashboard'>
      <h2>
        Welcome, User!
      </h2>
      <p>Begin Quizzing yourself.</p>
      <div className='Start_Quiz'>
        <button onClick={() => startQuiz()}>Start Comprehensive Quiz</button>
        <button onClick={() => quizCategory()}>Select Quiz Category</button>
      </div>
      <Results category={props.category}/>
    </div>
  );

}