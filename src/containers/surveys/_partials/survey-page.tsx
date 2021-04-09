import React from "react";
import {SurveySection} from "./survey.section";

const SurveyPage = ({page, pageCount, changePage, totalPages, submit}: any) => {
    const {sections} = page;
    return (
        <div className="px-4 py-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
            <div className="px-4 sm:px-0 mb-5">
                <div dangerouslySetInnerHTML={{__html: page.description}} />
            </div>

            <div className="mb-3">
                {
                    sections ?
                        sections.map((section: any) => <SurveySection key={section.id} section={section} />)
                        :null
                }
            </div>

            <div className="py-3 sm:px-6 flex items-center justify-between">
                <div className="text-left">
                    {
                        pageCount > 0 ?
                            <button type="button"
                                    onClick={()=>changePage(-1)}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-grey-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-300">
                                Previous
                            </button>
                            : null
                    }
                </div>

                <div className="text-right">
                    {
                        pageCount < totalPages ?
                            <button type="button"
                                    onClick={()=>changePage(+1)}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Next
                            </button>
                            :
                            <button type="button"
                                    onClick={()=>submit()}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                    }

                </div>
            </div>

        </div>
    )
};

export {SurveyPage};
