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
      const { answer1, answer2, answer3, answer4, category_id = 1 } = e.target

      const question = {
        question: input_1.value,
        answer1: answer1.value,
        answer2: answer2.value,
        answer3: answer3.value,
        answer4: answer4.value,
        correct: answer1.value,
        category_id
      }

      ApiService.createQuestion(question)
        .then((res) => {
          props.handleCreate(res)
        })
    }
  }

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
        </>
      }

      <br/>
      <input type='submit'/>
    </form>
  );
}