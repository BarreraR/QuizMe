import './Answer.css'
import { useState } from 'react';

export default function Answer(props){
  const [clicked, setClicked] = useState(false);

  function answerSelected(){
    setClicked(!clicked);
    props.clicked();
  }
  return (
    <div className='Answer'>
      <input type='button' 
        className={`Answer__Button ${clicked ? 'Clicked' : ''}`} 
        value={props.answer} 
        onClick={()=>answerSelected()}/>
    </div>
  )
}