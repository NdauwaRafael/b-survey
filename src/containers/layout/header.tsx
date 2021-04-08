import React from "react";
import survey from "../../assets/img/survey.png";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const Header = ({isAuthenticated}: any) => (
    <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
                className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                        <span className="sr-only">Workflow</span>
                        <img src={survey} className="h-8 w-auto sm:h-10" alt="logo" />
                    </Link>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>


                {
                    isAuthenticated ?
                         <nav className="hidden md:flex space-x-10">
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Dashboard
                            </Link>
                            <Link to="/surveys" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Surveys
                            </Link>
                            <Link to="/profile" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Profile
                            </Link>
                            <Link to="/logout" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Logout
                            </Link>
                        </nav>
                        :
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </Link>
                        </div>
                }



            </div>
        </div>
    </div>
);

const mapStateToProps = ({auth: {isAuthenticated}, auth}: any) => {
    return {
        auth,
        isAuthenticated
    }
};

export default connect(mapStateToProps)(Header)
