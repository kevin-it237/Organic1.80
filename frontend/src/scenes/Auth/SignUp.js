import React, { Component, Fragment } from 'react';
import './Auth.scss';
import {Link} from 'react-router-dom';
import Loader from '../../globalComponents/Loader/Loader';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import {Header} from '../../globalComponents/Header/Header';

import userLogo from '../../assets/images/user.png';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        tel: '',
        isTyping: false,
        formErrors: {email: '', password: '', name: ''},
        emailValid: false,
        passwordValid: false,
        nameValid: false,
        formValid: false
    }

    componentDidMount() {
        
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let nameValid = this.state.nameValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'name':
            nameValid = value.trim().length >= 6;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        nameValid: nameValid
                      }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isTyping: true});
        if (this.state.formValid) {
            // Display Loader
            
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                tel: this.state.tel
            }
            // Launch the signup
        }
    }

    render() {
        const { isTyping, emailValid, passwordValid, nameValid , name, email, password, tel } = this.state;
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
                            {error&&error.length ? <div className="alert alert-danger">{error}</div>:null}
                            <input type="text" value={name} onChange={(e) => this.handleInputChange(e)} id="nom" className="fadeIn second" name="name" placeholder="Name"/>
                            {isTyping&&!nameValid ? <div style={{color: "red"}}>Required Field</div>:null}
                            <input type="email" value={email} onChange={(e) => this.handleInputChange(e)} id="email" className="fadeIn second" name="email" placeholder="Email Address"/>
                            {isTyping&&!emailValid ? <div style={{color: "red"}}>Not valid email address</div>:null}
                            <input type="password" value={password} onChange={(e) => this.handleInputChange(e)} id="password" className="fadeIn third" name="password" placeholder="Password"/>
                            {isTyping&&!passwordValid ? <div style={{color: "red"}}>Invalid. Min 6 caraters</div>:null}
                            <input type="password" value={password} onChange={(e) => this.handleInputChange(e)} id="password" className="fadeIn third" name="password" placeholder="Password Confirmation"/>
                            {isTyping&&!passwordValid ? <div style={{color: "red"}}>Invalid. Min 6 caraters</div>:null}
                            <button disabled={loader} type="submit" onClick={(e) => this.handleSubmit(e)} id="signBtn" className="button fadeIn fourth mt-4 mb-5">{loader ? <Loader color="white" />:"Register"}</button>
                        </form>

                        <p>Or Sign Up with Social account:</p>
                        <div className="d-flex socialWrapper">
                            <GoogleLoginButton onClick={this.startAuth} iconSize="23px" />
                            <FacebookLoginButton onClick={this.startAuth} iconSize="23px" />
                        </div>

                        <div id="formFooter">
                            <Link to="/login" className="underlineHover">Already have an account ? Login here.</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SignUp;