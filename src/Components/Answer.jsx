import './Answer.css'

export default function Answer(props){
  return (
    <div className='Answer'>
      <input id={`${props.answer}_${props.question}`} name={props.question} type='radio' value={props.answer}/>
      <label for={`${props.answer}_${props.question}`}>{props.answer}</label>
    </div>
  )
}