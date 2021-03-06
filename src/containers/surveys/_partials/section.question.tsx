import React from "react";
import TextInput from "../../../components/form/Input";
import {Select} from "../../../components/form/Select";

const SectionQuestion = ({question, formData, updateForm}: any) => {
    const {q_options} = question;

    const handleChange = (event: any, question: any) => {
        let value;
        if (event.target.multiple) {
            value = Array.from(event.target.selectedOptions, (option: any) => option.value)
        }
        else {
            value = event.target.value;
        }
        let data = {
            column_match: event.target.name,
            q_ans: value,
            q_id: question.id
        };
        updateForm(data)
    };


    return (
        <div className="mb-4">
            {
                question.widget === 'article-image' ?
                    <img src={question.description} alt="" className="h-8 w-auto sm:h-10"/>
                    :
                    q_options.length > 0 ?
                        <Select
                            multiple={question.type === 'multiselect'}
                            label={question.text}
                                onChange={(event: any)=>handleChange(event, question)}
                                name={question.column_match}
                                options={q_options}
                                value={formData[question.column_match]}
                        />
                        :
                        <TextInput
                            value={formData[question.column_match]}
                            label={question.text}
                            onChange={(event: any)=>handleChange(event, question)}
                            name={question.column_match}
                            type={question.type}/>
            }
        </div>
    )
};

export {SectionQuestion};
