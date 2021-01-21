import './Answer.css'
import { useState } from 'react';

export default function Answer(props){
  const [clicked, setClicked] = useState(false);

  function answerSelected(){
    setClicked(!clicked);
    props.clicked();
    // console.log(props.answer)
  }
  return (
    <div className='Answer'>
      { /* redo with buttons */ }
      {/* <input id={`${props.answer}_${props.question}`} name={props.question} type='radio' value={props.answer} autofocus/>
      <label htmlFor={`${props.answer}_${props.question}`}>{props.answer}</label> */}
      <input type='button' className={`Answer__Button ${clicked ? 'Clicked' : ''}`} value={props.answer} onClick={()=>answerSelected()}/>
    </div>
  )
}