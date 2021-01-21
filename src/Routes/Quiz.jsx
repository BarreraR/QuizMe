import Question from '../Components/Quiz/Question';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Quiz() {
  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
  
  const [question, setQuestion] = useState(0);
  const history = useHistory();

  const setNextQuestion = () => {
    if(question + 1 < questions.length)
      setQuestion(question + 1);
    else
      history.push('/dashboard');
  }

  return (
    <div className='Quiz'>
      <Question question={questions[question]} nextQuestion={() => setNextQuestion()}/>
      
    </div>
  );
}