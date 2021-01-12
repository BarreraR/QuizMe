import Answer from './Answer';
import { useState } from 'react'
import './Question.css';

export default function Question(props){
  const [ answer, setAnswer ] = useState(''); 

  function goNextQuestion(e){
    e.preventDefault();
    // remove scroll, have one question rendered at a time
    props.nextQuestion();
    // submit answer to database
  }

  return (
    <div className='Question'>
    <form onSubmit={e=>goNextQuestion(e)}>
      <h2>{props.question}</h2>
      <Answer answer='Answer 1' question={props.question}/>
      <Answer answer='Answer 2' question={props.question}/>
      <Answer answer='Answer 3' question={props.question}/>
      <Answer answer='Answer 4' question={props.question}/>
      <button type='submit'>Next</button>
    </form>
    </div>
  )
}