import React from "react";

const SurveyRow = ({form} : any) => {
        const formatDate = (date: string) => {
            return new Date(date).toLocaleDateString() + " - " + new Date(date).toLocaleTimeString()
        };

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{form.name}</div>
                <div className="text-sm text-gray-500">{form.description}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{form.creator.name}</div>
                <div className="text-sm text-gray-500">{form.creator.email}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                {form.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(form.created)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
            </td>
        </tr>
    )
};


export default SurveyRow;
