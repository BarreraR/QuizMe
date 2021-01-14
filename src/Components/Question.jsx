import Answer from './Answer';
import Check from './Check';
import { useState } from 'react'
import './Question.css';

export default function Question(props){
  const [ answer, setAnswer ] = useState(null); 
  const [ answers, setAnswers ] = useState(['Answer 1', 'Answer 2','Answer 3','Answer 4']);
 
  function selectedAnswer(answer){
    setAnswer(answer);
    console.log(answer);
  }

  function goNextQuestion(e){
    e.preventDefault();
    props.nextQuestion();
    setAnswer(null);
    setAnswers(['Answer 5', 'Answer 2','Answer 7','Answer 8']);
    console.log(`Going to next ${answer}`);
    // submit answer to database
  }

  return (
    <div className='Question'>
    <form onSubmit={e=>goNextQuestion(e)}>
      <h2>{props.question}</h2>

      {!answer && answers.map(a => 
        <Answer key={`${a}__${props.question}`} answer={a} clicked={()=>selectedAnswer(a)}/>)
      }
      
      {answer && <Check guess={answer} answer='Answer 2'/>}
      
      {answer && <button type='submit'>Next</button>}
    </form>
    </div>
  )
}