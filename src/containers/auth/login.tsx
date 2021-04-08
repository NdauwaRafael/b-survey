import React, {Component} from "react";
import TextInput from "../../components/form/Input";
import {AnyAction, bindActionCreators, Dispatch} from "redux";
import {loginUser} from "../../redux/actions/auth";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";

interface LoginProps {
    auth?: any;
    authError?: any;
    loginUser: any;
}

interface LoginState {
    user: any
    errors: any
}


class Login extends Component<LoginProps, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",
            },
            errors: {
                email: "",
                password: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleChange(event: { target: { name: any; value: any; }; }) {
        let field = event.target.name;
        let value = event.target.value;
        let user = Object.assign({}, this.state.user);
        user[field] = value;
        return this.setState({user});
    };

    formIsValid() {
        let isValid = true;
        const {user: {username, password}, errors}: any = this.state;

        if (!username || username.length === 0) {
            isValid = false;
            errors.username = "Username is required";
        } else {
            errors.username = ""
        }

        if (!password || password.length === 0) {
            isValid = false;
            errors.password = "Password is required";
        } else {
            errors.password = ""
        }

        this.setState({errors});

        return isValid;
    }

    onSave(e: any) {
        e.preventDefault();
        if (!this.formIsValid()) {
            return;
        }

        this.props.loginUser(this.state.user)
    }

    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to="/"/>
        }

        const {user: {username, password}, errors}: any = this.state;
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <form method="POST" className="mt-8 space-y-6" onSubmit={this.onSave}>
                        <div className="px-3 bg-gray-200 shadow overflow-hidden sm:rounded-lg py-12">

                            <div className="mt-3 mb-3">
                                <TextInput
                                    error={errors.username}
                                    label="Username" onChange={this.handleChange} name="username" value={username}
                                    type="text"/>
                            </div>

                            <div className="mt-3 mb-3">
                                <TextInput
                                    error={errors.password}
                                    label="Password" onChange={this.handleChange} value={password} name="password"
                                    type="password"/>
                            </div>

                            <div className="mt-5 mb-3">
                                <button type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        loginUser: bindActionCreators(loginUser, dispatch)
    }
};

const mapStateToProps = ({auth: {authError}, auth}: any) => {
    return {
        auth,
        authError
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
