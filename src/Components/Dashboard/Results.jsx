export default function Results(props){
  let answers = props.answers;

  function createMap(){
    const map = {};

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
    let categories = props.category.map(c=> {
      const id = c.id.toString();
      return <section key={c.id}>
        <h3>Score for {c.category}:</h3>
        {map[id]
          ? <p>
            {Math.trunc(map[id].correct / map[id].total * 100)}%
            <br/>
            {map[id].correct} correct out of {map[id].total}
           </p>
         : <p>0% <br/> No questions answered</p>
        }
        <hr/>
      </section>
    });
  
    return categories;
  }

  return (
    <div className='Results'>
      {createMap()}
    </div>
  );
}