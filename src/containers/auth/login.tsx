import React, {Component} from "react";
import TextInput from "../../components/form/Input";

class Login extends Component{
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
            <div>
                <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <TextInput label="Username" onChange={this.handleChange} name="username" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
