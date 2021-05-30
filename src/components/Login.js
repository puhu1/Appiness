import React, {Component} from 'react';
import {connect} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import "./Login.css"
import {Button} from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            open: false
        }
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    submitLogin() {
        let userInfo = this.props.email.login
        if (userInfo && userInfo.username === this.state.email && userInfo.password === this.state.password) {
            this.props.history.push("./emplyoeeList")
        } else {
            this.setState({open: true})
        }
    }

    render() {
        return (
            <div className={"login"}>
                <h2>Login</h2>
                <form className={"login_form"}>
                    <input className={"input"} type={"email"} name={"email"} aria-required="true" placeholder={"Email"}
                           value={this.state.email}
                           onChange={(e) => this.onChangeEmail(e)}/>
                    <input className={"input"} type={"password"} placeholder={"Password"} value={this.state.password}
                           onChange={(e) => this.onChangePassword(e)}/>
                    <Button variant={'contained'} id={"button"}
                            disabled={this.state.email.length === 0 && this.state.password.length === 0}
                            onClick={() => this.submitLogin()}>Submit</Button>
                </form>
                {this.state.open ? <Snackbar open={this.state.open} autoHideDuration={6000}
                                             message={"Please enter valid user name and password"}>
                    </Snackbar>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.login
});

export default connect(mapStateToProps, {})(Login);
