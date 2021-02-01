import Question from '../Components/Quiz/Question';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ApiService from '../Services/api-service';

export default function Quiz(props) {
  const [question, setQuestion] = useState(0);
  const [quiz, setQuiz] = useState([]);

  const history = useHistory();
  const location = useLocation().pathname.split('/quiz/')[1];

  useEffect(()=>{
    if(location) {
      ApiService.getCategoryQuiz(location)
        .then((res) => {
          setQuiz(res.quiz);
        })
    } else {
      setQuiz(props.quiz);
    }
  }, [location, props.quiz])

  const questions = quiz.map(q => q.question);

  const setNextQuestion = () => {
    if(question + 1 < questions.length)
      setQuestion(question + 1);
    else
      history.push('/dashboard');
  }

  return (
    <div className='Quiz'>
      <Question 
        questionNumber={question}
        quiz={quiz}
        question={questions[question]} 
        nextQuestion={() => setNextQuestion()}/>
    </div>
  );
}