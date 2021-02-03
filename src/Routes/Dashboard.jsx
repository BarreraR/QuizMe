import './Dashboard.css';
import Results from '../Components/Dashboard/Results';
import { useHistory } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import ApiService from '../Services/api-service';
import TokenService from '../Services/token-service';

export default function Dashboard(props){
  let history = useHistory();
  const [ answers, setAnswers ] = useState([]);
  const [ user, setUser] = useState('Guest');

  useEffect(()=>{
    ApiService.getAnswers()
    .then(res => {
      setAnswers(res.answers);
    });

    if(TokenService.hasAuthToken())
      setUser(TokenService.parseAuthToken().sub.toUpperCase())
  }, [])

  const startQuiz = () =>  {
    history.push('/quiz');
  }

  function quizCategory(){
    history.push('/categories');
  }

  return(
    <div className='Dashboard'>
      <h2>
        Welcome, {user}!
      </h2>
      <p>Begin Quizzing yourself.</p>
      <div className='Start_Quiz'>
        <button onClick={() => startQuiz()}>Start Comprehensive Quiz</button>
        <button onClick={() => quizCategory()}>Select Quiz Category</button>
      </div>
      <Results answers={answers} category={props.category}/>
    </div>
  );

}