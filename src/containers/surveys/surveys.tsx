import React, {useEffect} from "react";
import {loadSurveyForms} from "../../redux/actions/survey"
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import SurveyHead from "./_partials/survey-head";
import SurveyRow from "./_partials/survey-row";

const Surveys = () => {
    const dispatch = useDispatch();
    const forms = useSelector((state: RootStateOrAny) => state.surveys.forms);

    useEffect(() => {
        dispatch(loadSurveyForms());
    }, []);

    return (
        <div className="px-8 py-6">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                        <div className="px-4 sm:px-0 mb-5">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Surveys</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Here is a list of available surveys to fill out. Click View to open
                            </p>
                        </div>

                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <SurveyHead/>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    forms.map((form: any) => <SurveyRow key={form.id} form={form}/>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export {Surveys};
