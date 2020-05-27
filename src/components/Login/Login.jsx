import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type="text" placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData)=>{
        console.log(formData)
    }
    return <div>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit={onSubmit }/>
    </div>
}

export default Login