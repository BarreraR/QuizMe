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
import NotFoundRoute from './Routes/NotFoundRoute';
import LandingRoute from './Routes/LandingRoute';

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
          <Route exact path='/login'>
            <Login handleLogin={()=>handleLogin()}/>
          </Route>
          <Route exact path='/register' component={Register}/>

          <Route exact path='/dashboard'>
            {TokenService.hasAuthToken() && 
              <Dashboard category={category}/>  
            }
            {!TokenService.hasAuthToken() && <NotFoundRoute /> }    
          </Route> 

          <Route exact path='/admin'>
            {TokenService.hasAuthToken() && TokenService.parseAuthToken().admin && 
              <Admin quiz={quiz} category={category} update={(data)=>handleUpdate(data)}/> 
            }
            {(!TokenService.hasAuthToken() || !TokenService.parseAuthToken().admin) && <NotFoundRoute /> }
          </Route> 
          
          <Route path='/quiz'>
            {TokenService.hasAuthToken() && 
              <Quiz quiz={quiz}/>  
            }
            {!TokenService.hasAuthToken() && <NotFoundRoute /> }
          </Route> 
          <Route exact path='/categories'>
            {
              TokenService.hasAuthToken() 
                ? <QuizCategory category={category}/>
                : <NotFoundRoute />
            }
          </Route> 

          <Route exact path='/' component={LandingRoute} />
          <Route component={NotFoundRoute} />

        </Switch>
      </main>
      
    </div>
  );
}

export default App;
