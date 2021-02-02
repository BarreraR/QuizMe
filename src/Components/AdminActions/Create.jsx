import ApiService from '../../Services/api-service';

export default function Create(props){
  const { type } = props

  function handleSubmit(e){
    e.preventDefault();
    if(type === 'category')
      ApiService.createCategory(e.target.input_1.value)
        .then((res) => {
          props.handleCreate(res)
          console.log(res, ' response after post')          
        })
    else
      console.log('create question')
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
          <input type='text' required/>

          <br/>
          <label>Create second answer:</label>
          <br/>
          <input type='text' required/>

          <br/>
          <label>Create third answer:</label>
          <br/>
          <input type='text' required/>

          <br/>
          <label>Create fourth answer:</label>
          <br/>
          <input type='text' required/>
        </>
      }

      <br/>
      <input type='submit'/>
    </form>
  );
}