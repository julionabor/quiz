import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import './App.css'

import Welcome from './components/welcome/Welcome'
import Question from './components/question/Question'
import GameOver from './components/gameover/GameOver'
import PickCategory from './components/pickcategory/PickCategory'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(()=> {
    dispatch({ type: "REORDER_QUESTIONS" })
  },[])

  return (
    <div className="App">
      <h1>Quizz App</h1>      
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      {quizState.gameStage === "Category" && <PickCategory />}
      
    </div>
  )
}

export default App
