import ApiService from '../../Services/api-service';

export default function Create(props){
  const { type } = props

  function handleSubmit(e){
    e.preventDefault();
    const { input_1 } = e.target
    if(type === 'category')
      ApiService.createCategory(input_1.value)
        .then((res) => {
          props.handleCreate(res)
        })
    else {
      const { answer1, answer2, answer3, answer4, category, correct } = e.target
      const correctAnswer = [answer1, answer2, answer3, answer4]

      const question = {
        question: input_1.value,
        answer1: answer1.value,
        answer2: answer2.value,
        answer3: answer3.value,
        answer4: answer4.value,
        correct: correctAnswer[correct.value].value,
        category_id: category.value,
      }

      ApiService.createQuestion(question)
        .then((res) => {
          props.handleCreate(res)
        })
    }
  }

  const list = props.category.map(c => <option key={c.id} value={c.id}>{c.category}</option>)

  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
      <br/>
      <label>Create {props.type}:</label>
      <br/>
      <input type='text' id='input_1' required/>
      
      {props.type === 'question' &&
        <>
          <br/>
          <label>Create first answer:</label>
          <br/>
          <input type='text' id='answer1' required/>

          <br/>
          <label>Create second answer:</label>
          <br/>
          <input type='text' id='answer2' required/>

          <br/>
          <label>Create third answer:</label>
          <br/>
          <input type='text' id='answer3' required/>

          <br/>
          <label>Create fourth answer:</label>
          <br/>
          <input type='text' id='answer4' required/>

          <br/>
          <label>Select a category:</label>
          <br/>
          <select name='category' id='category' required>
            {list}
          </select>

          <br/>
          <label>Select the correct answer:</label>
          <br/>
          <select name='correct' id='correct' required>
            <option value='0'>First Answer</option>
            <option value='1'>Second Answer</option>
            <option value='2'>Third Answer</option>
            <option value='3'>Fourth Answer</option>
          </select>

        </>
      }

      <br/>
      <br/>
      <input type='submit'/>
    </form>
  );
}