import { useState } from 'react';

export default function Admin(){
  const [changeType, setChangeType] = useState('category');
  const [ action, setAction ] = useState('');

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

      <input type='button' value='Update' onClick={()=>changeAction('update')}/>
      <input type='button' value='Delete' onClick={()=>changeAction('delete')}/>
      <input type='button' value='Create' onClick={()=>changeAction('create')}/>

      {action === 'update' && <p>Update selected </p>}
      {action === 'delete' && <p>Delete selected </p>}
      {action === 'create' && <p>Create selected </p>}

      <form>

      </form>
    </div>
  );
}