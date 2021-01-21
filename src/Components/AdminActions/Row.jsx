import './Row.css';

export default function Row(props){
  return(
    <div className='Row'>
      <span>{props.text}</span>
      <button className='delete'>{"\u274C"} Delete</button>
      <button className='update'>{"\u270D"} Edit</button>
    </div>
  );
}