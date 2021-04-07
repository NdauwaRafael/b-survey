import React, {Component} from "react";
import TextInput from "../../components/form/Input";

class Login extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {
                email: "",
                password: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: { target: { name: any; value: any; }; }) {
        let field = event.target.name;
        let value = event.target.value;

        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <form action="#" method="POST" className="mt-8 space-y-6" >
                        <div className="px-3 bg-gray-200 shadow overflow-hidden sm:rounded-lg py-12">

                            <div className="mt-3 mb-3" >
                                <TextInput label="Username" onChange={this.handleChange} name="username"
                                           type="text"/>
                            </div>

                            <div className="mt-3 mb-3">
                                <TextInput label="Password" onChange={this.handleChange} name="password"
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

export default Login;
