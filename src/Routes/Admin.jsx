import { useState, useEffect } from 'react';
import Create from '../Components/AdminActions/Create';
import Row from '../Components/AdminActions/Row';
import ApiService from '../Services/api-service';

export default function Admin(props){
  const [ changeType, setChangeType ] = useState('category');
  const [ create, setCreate ] = useState(true);
  const [data, setData] = useState({category: [], quiz: []});

  useEffect(()=>{
    const { category, quiz } = props
    setData({category, quiz})
  }, [props]); 

  function change(change){
    setChangeType(change);
  }

  function changeCreate(){
    setCreate(!create);
  }

  function handleDelete(id){
    if(changeType === 'category') {
      ApiService.deleteCategory(id)
        .then((res) => {
          setData({
            quiz: data.quiz,
            category: data.category.filter(c => c.id !== id)
          });
          props.update({
            quiz: data.quiz,
            category: data.category.filter(c => c.id !== id)
          });
        });
      } else {
      ApiService.deleteQuestion(id)
      .then((res) => {
        setData({
          quiz: data.quiz.filter(c => c.id !== id),
          category: data.category
        });
        props.update({
          quiz: data.quiz.filter(c => c.id !== id),
          category: data.category
        });
      });
    }
  }

  // function handleEdit(){

  // }

  function handleCreate(newData){
    if(changeType === 'category') {
      setData({
        quiz: data.quiz,
        category: [ ...data.category, newData.category]
      });
      
      setCreate(!create);
      
      props.update({
        quiz: data.quiz,
        category: [ ...data.category, newData.category]
      });
    }
    else {
      setData({
        quiz: [...data.quiz, newData.question],
        category: data.category
      });

      setCreate(!create);
      
      props.update({
        quiz: [...data.quiz, newData.question],
        category: data.category
      });
    }
  }

  const qData = changeType === 'category' 
    ? data.category.map(c => 
      <Row 
        key={c.id} 
        text={c.category} 
        handleDelete={()=>handleDelete(c.id)}/>) 
    : data.quiz.map(q => 
      <Row 
        key={q.id} 
        text={q.question}
        handleDelete={()=>handleDelete(q.id)}/>);

  return (
    <div className='Admin'>
      <h2>Select quiz category or question and what action to perform</h2>
      <input type='button' value='Category' onClick={()=>change('category')}/>
      <input type='button' value='Question' onClick={()=>change('question')}/>

      {changeType === 'category' && <p>Category selected </p>}
      {changeType === 'question' && <p>Question selected </p>}

      <input type='button' value={create? `Create new ${changeType}`:'Cancel'} onClick={()=>changeCreate()}/>
      
      <br/>
      <br/>
      
      {!create && <Create type={changeType} handleCreate={(data)=>handleCreate(data)}/>}
      {create && qData}
      
    </div>
  );
}