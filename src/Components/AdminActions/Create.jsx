export default function Create(props){
  return (
    <form>
      <br/>
      <label>Create {props.type}:</label>
      <br/>
      <input type='text' required/>
      
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