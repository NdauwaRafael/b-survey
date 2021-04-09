import React, {useEffect} from "react";
import {Props} from "../../_helpers/_route-props";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getFormFromId} from "./_helpers/survey.helpers";
import {loadSurveyForms} from "../../redux/actions/survey";
import {SurveyPage} from "./_partials/survey-page";

const Survey = ({match}: Props) => {
    const dispatch = useDispatch();
    const forms = useSelector((state: RootStateOrAny) => state.surveys.forms);
    const form = getFormFromId(forms, match.params.id);
    const {pages} = form;

    useEffect(() => {
        if (!forms || forms.length === 0) {
            dispatch(loadSurveyForms());
        }
    }, [dispatch, forms]);

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
                            <form>
                                {pages ?
                                    pages.map((page: any) => <SurveyPage key={page.id} page={page}/>)
                                    : null
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {Survey};
