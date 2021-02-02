import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Admin from './Routes/Admin';
import Quiz from './Routes/Quiz';
import QuizCategory from './Routes/QuizCategory';
import Nav from './Components/Navigation/Nav';
import { Route, Switch, Link } from 'react-router-dom';
import TokenService from './Services/token-service';
import ApiService from './Services/api-service';

function App() {
  const [ hasToken, setHasToken ] = useState(false);
  const [ category, setCategory ] = useState([]);
  const [ quiz, setQuiz ] = useState([]);

  function handleLogin(){
    setHasToken(TokenService.hasAuthToken());
  }

  function handleCategory(){
    ApiService.getCategories()
      .then((res) => {
        setCategory(res.categories)
      })
  }

  function handleQuiz(){
    ApiService.getQuiz()
      .then((res) => {
        setQuiz(res.quiz)
      })
  }

  function handleUpdate(data){
    console.log(data.category);
    setCategory(data.category);
    setQuiz(data.quiz);
  }

  useEffect(() => {
    handleLogin()
    if(hasToken){
      handleCategory();
      handleQuiz();
    }
  }, [hasToken])

  return (
    <div className="App">
      <header className="App-header">
        <Link to={hasToken?'/dashboard':'/'} className='Header_Link'>
          <h1>QuizMe</h1>
        </Link>
        <Nav handleLogin={()=>handleLogin()}/>
      </header>
      <main className='Main'>
        <Switch>          
          <Route path='/login'>
            <Login handleLogin={()=>handleLogin()}/>
          </Route>
          <Route path='/register' component={Register}/>

          <Route path='/dashboard'>
            <Dashboard category={category}/>  
          </Route> 
          <Route path='/admin'>
            <Admin quiz={quiz} category={category} update={(data)=>handleUpdate(data)}/> 
          </Route> 
          <Route path='/quiz'>
            <Quiz quiz={quiz}/>  
          </Route> 
          <Route path='/categories'>
            <QuizCategory category={category}/>
          </Route> 
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
