import React, {useEffect} from "react";
import {Props} from "../../_helpers/_route-props";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getFormFromId} from "./_helpers/survey.helpers";
import {loadSurveyForms} from "../../redux/actions/survey";

const Survey = ({match}: Props) => {
    const dispatch = useDispatch();
    const forms = useSelector((state: RootStateOrAny) => state.surveys.forms);
    const form = getFormFromId(forms, match.params.id);
    console.log(form);

    useEffect(() => {
        if (!forms || forms.length === 0) {
            dispatch(loadSurveyForms());
        }
    }, [dispatch, forms]);

    return (
        <div>
            <h2>Survey Details</h2>
        </div>
    )
};

export {Survey};
