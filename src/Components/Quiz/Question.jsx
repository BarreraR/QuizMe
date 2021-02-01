import Answer from './Answer';
import Check from './Check';
import { useEffect, useState } from 'react';
import ApiService from '../../Services/api-service';
import './Question.css';

export default function Question(props){
  const [ answer, setAnswer ] = useState(null); 
  const [ answers, setAnswers ] = useState([]);

  useEffect(()=>{
    if(props.quiz[props.questionNumber])
    setAnswers([
      props.quiz[props.questionNumber].answer1, 
      props.quiz[props.questionNumber].answer2, 
      props.quiz[props.questionNumber].answer3, 
      props.quiz[props.questionNumber].answer4 
    ])
  }, [props.quiz, props.questionNumber])

  function selectedAnswer(answer){
    setAnswer(answer);
    const answered = {
      "question_id": props.quiz[props.questionNumber].id,
      "answer": answer,
      "category_id": props.quiz[props.questionNumber].category_id
    }
    // if error, will still go to next question without posting
    ApiService.postAnswer(answered);
  }

  function goNextQuestion(e){
    e.preventDefault();
    props.nextQuestion();
    setAnswer(null);
    const next = props.questionNumber +1;
    if(next < props.quiz.length)
      setAnswers([
        props.quiz[next].answer1, 
        props.quiz[next].answer2, 
        props.quiz[next].answer3, 
        props.quiz[next].answer4 
    ])
  }

  return (
    <div className='Question'>
    <form onSubmit={e=>goNextQuestion(e)}>
      <h2>{props.question}</h2>

      {!answer && answers.map(a => 
        <Answer key={`${a}__${props.question}`} answer={a} clicked={()=>selectedAnswer(a)}/>)
      }
      
      {answer && <Check guess={answer} answer={props.quiz[props.questionNumber].correct} />}
      
      {answer && <button type='submit'>Next</button>}
    </form>
    </div>
  )
}