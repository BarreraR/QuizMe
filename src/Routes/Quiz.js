import Question from '../Components/Question';
import { useState } from 'react';

export default function Quiz() {
  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
  
  const [question, setQuestion] = useState(0);
  const setNextQuestion = () => {
    if(question + 1 < questions.length)
    setQuestion(question + 1);
  }

  return (
    <div className='Quiz'>
      <Question question={questions[question]} nextQuestion={() => setNextQuestion()}/>
      
    </div>
  );
}