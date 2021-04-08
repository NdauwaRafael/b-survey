import React, {useEffect} from "react";
import {loadSurveyForms} from "../../redux/actions/survey"
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";


const Surveys = () => {
    const dispatch = useDispatch();
    const form = useSelector((state: RootStateOrAny) => state.surveys.form)

    useEffect(()=>{
        dispatch(loadSurveyForms());
    }, []);

    return (
        <div className="px-8 py-6">
            <h2>Surveys</h2>
        </div>
    )
};


export {Surveys};
