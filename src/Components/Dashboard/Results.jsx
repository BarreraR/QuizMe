import { useState, useEffect } from 'react';
import ApiService from '../../Services/api-service';

export default function Results(props){
  const [ answers, setAnswers ] = useState([]);
  const map = {};

  useEffect(()=>{
    getAnswers()
  }, []);

  function getAnswers(){
    ApiService.getAnswers()
    .then(res => {
      // console.log(res);
      setAnswers(res.answers);
    });
  }

  for(let i=0; i<answers.length; i++){
    const cat_id = answers[i].category_id.toString();

    if(cat_id in map){
      const correct = answers[i].correct ? map[cat_id].correct + 1 : map[cat_id].correct;
      map[cat_id] = { correct: correct, total: map[cat_id].total + 1 };
    } else {
      const correct = answers[i].correct ? 1 : 0;
      map[cat_id] = { correct: correct, total: 1}
    }
  }

  // console.log(map)

  const categories = props.category.map(c=> {
    const id = c.id.toString();
    return <section key={c.id}>
      <h3>Score for {c.category}:</h3>
      {console.log(map[id])}
      <p>{map['1'].total}</p>
    </section>
  }
  );

  return (
    <div className='Results'>
      {/* {console.log(answers)} */}
      <h3>Comprehensive Score: </h3>
      <p>0%</p>
      
      {categories}
    </div>
  );
}