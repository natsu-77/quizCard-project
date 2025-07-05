import { useState } from "react";

export default function QuizCard({question,options,answer}){
    const [answerMessage,setAnswerMessage] = useState("");
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    //ボタンが押された内容を回答と一致しているか確認して正解か不正解かを表示する関数
    const CheckAnswer = e =>{
      setSelectedAnswer(e.target.value);
      
      if(e.target.value === answer){
        setAnswerMessage("🎉 正解！");
        
      }else{
        setAnswerMessage("😢 不正解...");
      }
    }

    //「もう一度解答する」ボタンを押した際に初期状態に復元する関数
    const resetAnswer=()=>{
      setAnswerMessage("");
      setSelectedAnswer(null);
    }

    return(
      <div className='card'>
        <div className='question'>
            {question}
        </div>
        <div className='options'>
          {options.map(elem=>(
            <button type="button" onClick={CheckAnswer} value={elem} disabled={selectedAnswer !== null && selectedAnswer !== elem } 
            style={{borderColor:"gray",backgroundColor:selectedAnswer === elem ? (elem === answer? "lightgreen" : "salmon"):"white"}}>{elem}</button>
          )
          )}
        </div>
        {answerMessage ? <div>{answerMessage}</div> : null}
        {answerMessage ? <button onClick={resetAnswer}>もう一度解答する</button> : null}
      </div>
    );
}