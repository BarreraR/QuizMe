import Question from '../Components/Quiz/Question';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Quiz(props) {
  // const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
  const questions = props.quiz.map(q => q.question);
  
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
      {console.log(props.quiz)}
      <Question question={questions[question]} nextQuestion={() => setNextQuestion()}/>
      
    </div>
  );
}