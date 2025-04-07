import { useState } from "react";

export default function QuizCard({question,options,answer}){
    const [answerMessage,setAnswerMessage] = useState("");
    //ボタンが押された内容を回答と一致しているか確認して正解か不正解かを表示する関数
    const CheckAnswer = e =>{
      if(e.target.value === answer){
        setAnswerMessage("🎉 正解！");
      }else{
        setAnswerMessage("😢 不正解...");
      }
    }

    return(
      <div className='card'>
        <div className='question'>
            {question}
        </div>
        <div className='options'>
          {options.map(elem=>(
            <button type="button" onClick={CheckAnswer} value={elem} disabled={false} style={{borderColor:"gray",backgroundColor:"white"}}>{elem}</button>
          )
          )}
        </div>
        {answerMessage ? <div>{answerMessage}</div> : null}
      </div>
    );
}