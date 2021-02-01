import './QuizCategory.css';
import { useHistory } from 'react-router-dom';

export default function QuizCategory(props){
  const history = useHistory();

  function categorySelected(category) {
    history.push(`/quiz/${category}`);
  }

  const categories = props.category.map(
    category => 
      <input 
        type='button' 
        key={category.id}
        value={category.category} 
        onClick={()=>categorySelected(category.category)}/>
  );

  return (
    <div className='Categories'>

      <h2>Select a Quiz Category to take</h2>
      {categories}

    </div>
  );
}