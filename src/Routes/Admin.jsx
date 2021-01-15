import { useState } from 'react';
import Create from '../Components/AdminActions/Create';

export default function Admin(){
  const [changeType, setChangeType] = useState('category');
  const [ action, setAction ] = useState('create');

  function change(change){
    setChangeType(change);
  }

  function changeAction(change){
    setAction(change);
  }

  return (
    <div className='Admin'>
      <h2>Hi!</h2>
      <input type='button' value='Category' onClick={()=>change('category')}/>
      <input type='button' value='Question' onClick={()=>change('question')}/>

      {changeType === 'category' && <p>Category selected </p>}
      {changeType === 'question' && <p>Question selected </p>}

      <input type='button' value='Create' onClick={()=>changeAction('create')}/>
      <input type='button' value='Update' onClick={()=>changeAction('update')}/>
      <input type='button' value='Delete' onClick={()=>changeAction('delete')}/>
      
      <br/>
      <br/>
      <hr/>

      {action === 'create' && <Create type={changeType}/>}
      {action === 'update' && <p>Update selected </p>}
      {action === 'delete' && <p>Delete selected </p>}

    </div>
  );
}