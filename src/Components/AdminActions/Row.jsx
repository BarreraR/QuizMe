import './Row.css';

export default function Row(props){
  return(
    <div className='Row'>
      <span>{props.text}</span>
      <button className='delete'>Delete</button>
      <button className='update'>Update</button>
    </div>
  );
}