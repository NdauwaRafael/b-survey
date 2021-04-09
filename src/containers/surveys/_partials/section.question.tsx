import React from "react";
import TextInput from "../../../components/form/Input";
import {Select} from "../../../components/form/Select";

const SectionQuestion = ({question}: any) => {
    const {q_options} = question;
    const handleChange = () => {

    };

    return (
        <div className="mb-4">
            {
                question.widget === 'article-image' ?
                    <img src={question.description} alt="" className="h-8 w-auto sm:h-10"/>
                    :
                    q_options.length > 0 ?
                        <Select label={question.text}
                                onChange={handleChange}
                                name={question.column_match}
                                options={q_options}
                        />
                        :
                        <TextInput
                            label={question.text}
                            onChange={handleChange}
                            name={question.column_match}
                            type={question.type}/>
            }
        </div>
    )
};

export {SectionQuestion};
