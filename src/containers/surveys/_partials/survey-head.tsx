import React from "react";

const SurveyHead = () =>
    <tr>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Survey
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Creator
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
        </th>
        <th scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Created At
        </th>
        <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">View</span>
        </th>
    </tr>;

export default SurveyHead;
