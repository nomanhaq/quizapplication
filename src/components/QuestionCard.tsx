import React from 'react';
//Styles
import{Wrapper, ButtonWrapper} from './QuestionCard.styles'
//Types
import { answerObject } from '../App';

type props = {
    question: string;
    answers: string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:  answerObject | undefined;
    questionNr: Number; 
    totalQuestions: Number; 
};

const QuestionCard: React.FC<props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => 
    (
        <Wrapper>
            <p className="number"> 
              Question: {questionNr}/ {totalQuestions}  
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                      key={answer}
                      correct={userAnswer?.correctAnswer === answer}
                      userClicked={userAnswer?.answer === answer}
                    >
                    <button disabled={userAnswer ? true:false} value={answer}onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                    </ButtonWrapper>
                 ))}
            </div>
        </Wrapper>
    );

export default QuestionCard;