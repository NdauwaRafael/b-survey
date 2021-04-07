import React from "react";
import PropTypes from "prop-types";

interface InputParams {
    name: string,
    value: string,
    label: string,
    error: any,
    onChange: any,
    type: string
}

const TextInput = ({name, value, label, error, onChange, type}: InputParams) => {
    let validatorClass: string = "";

    if (error.length > 0) {
        validatorClass = "focus:ring-red-500 focus:border-red-500 border-red-400";
    } else {
        validatorClass = "focus:ring-indigo-500 focus:border-indigo-500 border-gray-300";
    }

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type ? type : "text"}
                value={value || ""}
                id={name}
                name={name}
                onChange={onChange}
                placeholder={label}
                autoComplete={name}
                className={validatorClass + " mt-1  block w-full shadow-sm sm:text-sm rounded-md"}
            />
        </div>
    )

};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
    error: "",
    value: ""
};

export default TextInput;
