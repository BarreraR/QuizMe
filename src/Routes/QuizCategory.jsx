import './QuizCategory.css';
import { useHistory } from 'react-router-dom';

export default function QuizCategory(){
  const history = useHistory();

  function categorySelected(category) {
    history.push(`/quiz/${category}`);
  }

  const categories = ['router', 'state', 'context', 'hooks'].map(
    category => 
      <input 
        type='button' 
        key={category} 
        value={category} 
        onClick={()=>categorySelected(category)}/>
  );

  return (
    <div className='Categories'>

      <h2>Select a Quiz Category to take</h2>

      {categories}

    </div>
  );
}