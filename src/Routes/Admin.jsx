import { useState } from 'react';
import Create from '../Components/AdminActions/Create';
import Row from '../Components/AdminActions/Row';
export default function Admin(){
  const [ changeType, setChangeType ] = useState('category');
  const [ create, setCreate ] = useState(true);

  function change(change){
    setChangeType(change);
  }

  function changeCreate(){
    setCreate(!create);
  }


  const qData = changeType === 'category' ?
    ['router', 'state', 'context', 'hooks'].map(q => <Row text={q}/>) :
    ['question 1', 'question 2', 'question 3'].map(q => <Row text={q}/>);

  return (
    <div className='Admin'>
      <h2>Select quiz category or question and what action to perform</h2>
      <input type='button' value='Category' onClick={()=>change('category')}/>
      <input type='button' value='Question' onClick={()=>change('question')}/>

      {changeType === 'category' && <p>Category selected </p>}
      {changeType === 'question' && <p>Question selected </p>}

      <input type='button' value={create? `Create new ${changeType}`:'Cancel'} onClick={()=>changeCreate()}/>
      {/* <input type='button' value='Update' onClick={()=>changeAction('update')}/> */}
      {/* <input type='button' value='Delete' onClick={()=>changeAction('delete')}/> */}
      
      <br/>
      <br/>
      {/* <hr/> */}

      {!create && <Create type={changeType}/>}
      {create && qData}
      {/* {action === 'update' && qData} */}
      {/* {action === 'delete' && <p>Delete selected </p>} */}

    </div>
  );
}