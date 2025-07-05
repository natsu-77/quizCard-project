import {render} from "@testing-library/react";
import QuizCard from "../components/QuizCard";

test("問題が表示されていること",()=>{
    render(      
        <QuizCard
           question = {["日本の首都はどこ？"]}
           options = {["大阪", "東京", "京都"]}
           answer="東京"
          />)
    }
);