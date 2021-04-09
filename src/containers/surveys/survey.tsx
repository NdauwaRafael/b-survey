import React, {useEffect, useState} from "react";
import {Props} from "../../_helpers/_route-props";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getFormFromId} from "./_helpers/survey.helpers";
import {loadSurveyForms, submitSurveyAction, surveyStarted} from "../../redux/actions/survey";
import {SurveyPage} from "./_partials/survey-page";

interface IStartData {
    started: boolean;
    startTime: any;
    surveyId: number
}

const Survey = ({match}: Props) => {
    const dispatch = useDispatch();
    //get form data from redux store and filter opened form from route params
    const forms = useSelector((state: RootStateOrAny) => state.surveys.forms);
    const form = getFormFromId(forms, match.params.id);
    const {pages} = form;
    //Paginate the form pages
    const [pageCount, setPageCount] = useState(0);
    const currentPage = pages ? pages[pageCount] : {};
    //handle opening and closing of surveys
    const started_surveys = useSelector((state: RootStateOrAny) => state.surveys.startedSurveys);
    const current_survey_data = started_surveys.filter((survey: any) => survey.surveyId === match.params.id);
    let startedSurvey_raw = {surveyId: match.params.id, started: false, startTime: undefined};
    if (current_survey_data.length > 0){
        startedSurvey_raw = current_survey_data[0]
    }
    const [startData, setStartData] = useState<IStartData>(startedSurvey_raw);
    //handle updating form responses
    const [formData, setFormData] = useState([] as any);
    const [formRawData, setFormRawData] = useState([] as any);

    useEffect(() => {
        if (!forms || forms.length === 0) {
            dispatch(loadSurveyForms());
        }
    }, [dispatch, forms]);

    const handleChangePage = (count: number)=>{
        if (pages){
            if (pageCount < pages.length){
                setPageCount(pageCount + count)
            }
        }
    };

    const handleStartSurvey = ()=>{
        dispatch(surveyStarted(match.params.id));
    };

    const handleFormUpdate = ({column_match, q_ans, q_id}: any) => {
        setFormData([...formData, {column_match, q_ans, q_id}]);
        let data: any = {...formRawData};

        data[column_match] = q_ans;
        setFormRawData(data);
    };

    const handleSubmit = ()=>{
        dispatch(submitSurveyAction(formData));
    };

    return (
        <div className="px-8 py-6">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                        <div className="px-4 sm:px-0 mb-5">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Survey Details</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Fill out the survey details below
                            </p>
                        </div>

                        <div className="">
                            {
                                startData.started ?
                                    <form>
                                        <SurveyPage
                                            key={currentPage.id}
                                            page={currentPage}
                                            totalPages={pages ? pages.length - 1 : 0}
                                            pageCount={pageCount}
                                            formData={formRawData}
                                            submit={handleSubmit}
                                            updateForm={handleFormUpdate}
                                            changePage={handleChangePage}/>
                                    </form>
                                    :
                                    <div className="bg-gray-50">
                                        <div
                                            className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                                <span className="block">Ready to dive in?</span>
                                                <span
                                                    className="block text-indigo-600">Start the campaign now.</span>
                                            </h2>
                                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                                <div className="inline-flex rounded-md shadow">
                                                    <button onClick={()=>handleStartSurvey()}
                                                       className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                                        Get started
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {Survey};
