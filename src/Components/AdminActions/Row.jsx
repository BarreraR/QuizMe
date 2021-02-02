import './Row.css';

export default function Row(props){
  function handleDelete(){
    props.handleDelete();
  }

  return(
    <div className='Row'>
      <span>{props.text}</span>
      <button className='delete' onClick={()=>handleDelete()}>{"\u274C"} Delete</button>
      {/* <button className='update'>{"\u270D"} Edit</button> */}
    </div>
  );
}