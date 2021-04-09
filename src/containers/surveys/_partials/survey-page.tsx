import React from "react";
import {SurveySection} from "./survey.section";

const SurveyPage = ({page}: any) => {
    const {sections} = page;
    return (
        <div className="px-4 py-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
            <div className="px-4 sm:px-0 mb-5">
                <div dangerouslySetInnerHTML={{__html: page.description}} />
            </div>

            <div >
                {
                    sections ?
                        sections.map((section: any) => <SurveySection key={section.id} section={section} />)
                        :null
                }
            </div>

        </div>
    )
};

export {SurveyPage};
