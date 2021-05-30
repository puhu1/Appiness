import React, {Component} from 'react';
import {connect} from "react-redux";

import "./Login.css"




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeEmail(e){
        this.setState({email: e.target.value})
    }
    onChangePassword(e){
        this.setState({password: e.target.value})
    }
    submitLogin(){
        let userInfo = this.props.email.login
        if(userInfo && userInfo.username === this.state.email && userInfo.password === this.state.password){
            this.props.history.push("./emplyoeeList")
        }
        else
        {

        }
    }

    render() {
        return (
            <div className={"login"}>
                <h1>Login</h1>
                <form className={"login_form"}>
                    <input className={"input"} type={"email"} name={"email"} aria-required="true" placeholder={"Email"} value={this.state.email}
                           onChange={(e)=>this.onChangeEmail(e)}/>
                    <input className={"input"} type={"password"} placeholder={"Password"} value={this.state.password}
                           onChange={(e)=>this.onChangePassword(e)}/>
                           <button onClick={()=>this.submitLogin()}>Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    email: state.login
});

export default connect(mapStateToProps, {})(Login);
