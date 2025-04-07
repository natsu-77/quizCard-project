import QuizCard from './components/QuizCard'
import './App.css'

function App() {
  return (
    <div>
      <QuizCard
       question = {["日本の首都はどこ？"]}
       options = {["大阪", "東京", "京都"]}
       answer="東京"
      />
    </div>
  )
}

export default App
