import './Answer.css'

export default function Answer(props){

  return (
    <div className='Answer'>
      { /* redo with buttons */ }
      <input id={`${props.answer}_${props.question}`} name={props.question} type='radio' value={props.answer} autofocus/>
      <label htmlFor={`${props.answer}_${props.question}`}>{props.answer}</label>
    </div>
  )
}