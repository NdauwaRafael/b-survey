import React from "react";

const Select = ( { name, value, label, error, onChange, options, defaultOption, multiple }: any)=>{
    return (
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700" dangerouslySetInnerHTML={{__html: label}} />
            <select
                multiple={multiple}
                id={name}
                value={value || ''}
                name={name}
                onChange={onChange}
                autoComplete={name}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">{defaultOption}</option>
                {
                    options.map((option: any) =>
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>)
                }
            </select>
        </div>
    )
};

export {Select};
