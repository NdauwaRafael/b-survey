import React from "react";
import {SectionQuestion} from "./section.question";

const SurveySection = ({section}: any)=>{
    const {questions} = section;
    return (
        <div>
            <div className="mt-1 text-sm text-gray-600 mb-3 border-b border-gray-400">{section.description}</div>
            {
                questions?
                    questions.map((question: any)=><SectionQuestion key={question.id} question={question}/>)
                    :null
            }
        </div>
    )
};

export {SurveySection};
