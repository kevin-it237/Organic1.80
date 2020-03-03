import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Header} from '../../globalComponents/Header/Header';
import Loader from '../../globalComponents/Loader/Loader';
import './Auth.scss'; 
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

import userLogo from '../../assets/images/user.png';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isTyping: false,
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false,
        loading: false
    }

    componentDidMount() {
        
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Display Loader
        this.setState({isTyping: true});
        if(this.state.formValid) {
            
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            // Launch the signup
        }
    }

    render() {
        const { isTyping, emailValid, email, password } = this.state;
        const { error, loader } = this.props;
        
        return (
            <Fragment>
                <Header />
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first mt-3">
                        <img src={userLogo} id="icon" alt="User Icon" />
                        </div>

                        <form>
                            {error && error.length ? <div className="alert alert-danger">{error}</div> : null}
                            <input type="email" value={email} onChange={(e) => this.handleInputChange(e)} id="email" className="fadeIn second" name="email" placeholder="Email Address" />
                            {isTyping && !emailValid ? <div style={{ color: "red" }}>Not valid email address</div> : null}
                            <input type="password" value={password} onChange={(e) => this.handleInputChange(e)} id="password" className="fadeIn third" name="password" placeholder="Password" />
                            {isTyping && !this.state.passwordValid ? <div style={{ color: "red" }}>Invalide. Min 6 caratères</div> : null}
                            <button disabled={loader} type="submit" onClick={(e) => this.handleSubmit(e)} id="signBtn" className="button fadeIn fourth mt-4 mb-5">{loader ? <Loader color="white" /> : "Login"}</button>
                        </form>
                        <p>Or Login with Social account:</p>

                        <div className="d-flex socialWrapper">
                            <GoogleLoginButton onClick={this.startAuth} iconSize="23px" />
                            <FacebookLoginButton onClick={this.startAuth} iconSize="23px" />
                        </div>

                        <div id="formFooter">
                            <Link to="/signup" className="underlineHover">Don't have an account ? SignUp here.</Link>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapPropsToState = state => {
    return {
        loader: state.loader.loading,
        error: state.auth.error
    }
}

const mapDispatchToState = dispatch => {
    return {
        // onLogin: (data) => dispatch(login(data)),
        // onRenderLoader: () => dispatch(renderLoader()),
        // onClearError: () => dispatch(clearError()),
    }
}

export default Login;