import React, {Fragment} from 'react';
import { Modal } from 'react-bootstrap';
import Loader from '../../globalComponents/Loader/Loader';
import {addNotification} from '../../globalComponents/ReactNotification/ReactNotification'
import axios from 'axios';

class LeadCreationModalForm extends React.Component {

    state = {
        name: '',
        email: '',
        facebookAccount: '',
        instagramAccount: '',
        tel: '',
        isTyping: false,
        formErrors: {name: '', email: ''},
        emailValid: true,
        nameValid: false,
        formValid: false,
        loading: false,
        error: ''
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
        let nameValid = this.state.nameValid;
      
        switch(fieldName) {
          case 'email':
            if(value.trim().length === 0) { // Verify if email address is not empty
                fieldValidationErrors.email = '';
                emailValid = true
            } else {
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); // Validate email field
                fieldValidationErrors.email = emailValid ? '' : ' is invalid'; // Set the validation status
            }
            break;
          case 'name':
            nameValid = value.trim().length > 0; // Validate name field
            fieldValidationErrors.name = nameValid ? '': ' is Empty';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        nameValid: nameValid
                      }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isTyping: true});
        if (this.state.formValid) {
            // Display Loader
            this.setState({loading: true});
            // Build the lead object
            const lead = {
                name: this.state.name,
                email: this.state.email,
                userId: null,
                facebookAccount: this.state.facebookAccount,
                instagramAccount: this.state.instagramAccount,
                tel: this.state.tel,
            }
            // Send request to save the lead
            axios.post('/api/lead/new', lead)
            .then(response => {
                // Display success Notification
                addNotification('success', 'Lead', 'Lead Successfully Created')
                // Redirect to the form to complete lead creation
                this.props.navigate.push({
                    pathname: '/dashboard/lead/new',
                    state: { detail: response.data }
                });
            })
            .catch(err => {
                // Display Failed Notification
                addNotification('danger', 'Lead', 'Error when Creating Lead')
                // Clear loader and display error
                this.setState({loading: false, error: "An error occured. Please try again."})
            })
        }
    }

    render() {
        let {isTyping, emailValid, nameValid, name, email, facebookAccount, instagramAccount, tel, loading, error} = this.state;
        return (
            <Fragment>
                <Modal show={this.props.showModal} size="md" onHide={this.props.onCloseModal} >
                    <Modal.Header closeButton>
                        <Modal.Title><strong>Add a new Lead</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container ">
                            <div className="row py-4">
                                <div className="col-sm-12">
                                    <h4>Enter informations about the lead.</h4>
                                    <form className="mb-4">
                                        {error&&error.length ? <div className="alert alert-danger">{error}</div>:null}
                                        <div className="form-group">
                                            <input type="text" value={name} onChange={(e) => this.handleInputChange(e)} className="form-control" name="name" placeholder="Enter Name (*)" />
                                            {isTyping&&!nameValid ? <div style={{color: "red"}}>This field is empty.</div>:null}
                                        </div>
                                        <div className="form-group">
                                            <input type="email" value={email} onChange={(e) => this.handleInputChange(e)} className="form-control" name="email" placeholder="Enter email" />
                                            {isTyping&&!emailValid ? <div style={{color: "red"}}>Invalid Field  email address.</div>:null}
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={facebookAccount} onChange={(e) => this.handleInputChange(e)} className="form-control" name="facebookAccount" placeholder="Facebook Account" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={instagramAccount} onChange={(e) => this.handleInputChange(e)} className="form-control" name="instagramAccount" placeholder="Instagram Account" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={tel} onChange={(e) => this.handleInputChange(e)} className="form-control" name="tel" placeholder="Phone Number" />
                                        </div>
                                        <div className="d-flex">
                                            <a disabled={loading} type="submit" onClick={(e) => this.handleSubmit(e)} className="button ml-auto">{loading? <Loader color="white" />: "Continue"}</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}

export default LeadCreationModalForm;