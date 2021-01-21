export default function Check(props){
  return (
    <div className='Check'>
      <h2>{props.guess === props.answer? 'Correct!': 'Incorrect!' }</h2>
      <h3>You selected: </h3>
      <p>{props.guess}</p>
      <h3>The correct answer was: </h3>
      <p>{props.answer}</p>
    </div>
  )
}