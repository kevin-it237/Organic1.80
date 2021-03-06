import React from 'react';
import './LeadCreation.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import BigLoader from '../../globalComponents/Loader/BigLoader';
import Loader from '../../globalComponents/Loader/Loader';
import {DateFormat} from '../../components/DateFormat/DateFormat';
import {addNotification} from '../../globalComponents/ReactNotification/ReactNotification'
import axios from 'axios';

class LeadCreation extends React.Component {
    state = {
        leadId: '',
        name: '',
        email: '',
        facebookAccount: '',
        instagramAccount: '',
        tel: '',
        website: '',
        status: '',
        qualification_status: '',
        observation: '',
        tags: [],
        engagement_rate: null,
        likes: null,
        comments: [],
        appointments: [],
        chat_links: [],
        share_links: [],
        created_at: null,

        isTyping: false,
        formErrors: {name: '', email: ''},
        emailValid: true,
        nameValid: true,
        formValid: true,
        error: '',
        loading: true,
        // Loader for different sections
        loader: {
            statsLoading: false,
            infosLoading: false,
            addingComment: false,
            addingAppointment: false,
            addingShare: false,
            addingChat: false,
        },

        singleComment: {body: "", link: "", isTyping: false},
        singleAppointment: {body: "", link: "", isTyping: false},
        singleSharedLink: {body: "", link: "", isTyping: false},
        singleChat: {body: "", link: "", isTyping: false},
    }

    componentDidMount() {
        console.log(this.props.location.state.detail.lead)
        const lead = this.props.location.state.detail.lead;
        this.setState({
            leadId: lead._id,
            name: lead.name,
            email: lead.email,
            facebookAccount: lead.facebook_account,
            instagramAccount: lead.instagram_account,
            tel: lead.tel,
            website: lead.website,
            status: lead.status,
            qualification_status: lead.qualification_status,
            observation: lead.observation,
            tags: lead.tags,
            engagement_rate: lead.engagement_rate,
            likes: lead.likes,
            comments: lead.comments,
            appointments: lead.appointments,
            chat_links: lead.chat_links,
            share_links: lead.share_links, 
            created_at: lead.created_at, 
            loading: false,
        })
    }

    // Get form values on state
    handleInputChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value.trim();
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    // Validate email field. Params: fieldName and field value
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
    
    // Verify if form is valid
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid});
    }

    // Submit informations about the lead global stats
    handleStatsSubmit = (e) => {
        e.preventDefault();
        // Display Loader
        this.setState({loader: {...this.state.loader, "statsLoading": true}});
        // Build the lead object
        const leadStats = {
            engagement_rate: this.state.engagement_rate,
            status: this.state.status,
            qualification_status: this.state.qualification_status,
        }
        // Send request to update the lead
        axios.patch('/api/lead/stats/update/' + this.state.leadId, leadStats)
        .then(response => {
            // Clear Notification
            this.setState({loader: {...this.state.loader, "statsLoading": false}, error: ""})
            // Display success Notification
            addNotification('success', 'Lead', 'Lead Successfully Updated')
        })
        .catch(err => {
            // Display Failed Notification
            addNotification('danger', 'Lead', 'Error when Updating Lead')
            // Clear loader and display error
            this.setState({loader: {...this.state.loader, "statsLoading": false}, error: "An error occured. Please try again."})
        })
    }
    
    // Submit informations about the lead informations
    handleSubmitPersonnalInfos = (e) => {
        e.preventDefault();
        this.setState({isTyping: true});
        if(this.state.formValid) {
            // Display Loader
            this.setState({loader: {...this.state.loader, "infosLoading": true}});
            // Build the lead object
            const leadInfos = {
                name: this.state.name,
                email: this.state.email,
                facebookAccount: this.state.facebookAccount,
                instagramAccount: this.state.instagramAccount,
                tel: this.state.tel,
                website: this.state.website,
                observation: this.state.observation
            }
            // Send request to update the lead
            axios.patch('/api/lead/infos/update/' + this.state.leadId, leadInfos)
            .then(response => {
                // Clear Notification
                this.setState({loader: {...this.state.loader, "infosLoading": false}, error: ""})
                // Display success Notification
                addNotification('success', 'Lead', 'Lead Successfully Updated')
            })
            .catch(err => {
                // Display Failed Notification
                addNotification('danger', 'Lead', 'Error when Updating Lead')
                // Clear loader and display error
                this.setState({loader: {...this.state.loader, "infosLoading": false}, error: "An error occured. Please try again."})
            })
        }
    }

    // Get form values for comment, appointment, chat and shares from state
    handleInputChangeInfos = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const id = e.target.id;
        const value = e.target.value.trim();
        this.setState({[name]: {...this.state[name], [id]: value, "isTyping": true}});
    }


    // submit comments, appointments, shares lik, chat on backend
    submit = (data, type, loader ) => { // Take data to send, type and filed name
        // Send request to update the lead
        axios.patch('/api/lead/'+ type +'/add/' + this.state.leadId, {data: data})
        .then(response => {
            // Clear Notification/fields and update the view with the new data
            this.setState({
                loader: {...this.state.loader, [loader]: false}, 
                singleComment: {body: "", link: "", isTyping: false},
                singleAppointment: {body: "", link: "", isTyping: false},
                singleSharedLink: {body: "", link: "", isTyping: false},
                singleChat: {body: "", link: "", isTyping: false},
                error: "", 
            })
            // Display success Notification
            addNotification('success', 'Lead', type +' successfully added.')
        })
        .catch(err => {
            // Display Failed Notification
            addNotification('danger', 'Lead', 'Error when adding new' + type)
            // Clear loader and display error
            this.setState({loader: {...this.state.loader, [loader]: false}, error: "An error occured. Please try again."})
        })
    }

    // Submit comments, appointments, shares lik, chat
    handleSubmitOtherInfos = (e, type) => {
        e.preventDefault();
        let { singleComment, singleAppointment, singleSharedLink, singleChat } = this.state;
        switch(type) {
            case 'comment':
                if(singleComment.body.length !== 0) {
                    // Render loader
                    this.setState({
                        loader: {...this.state.loader, "addingComment": true}, 
                        singleComment: {...singleComment, "isTyping": false},
                        comments: [singleComment, ...this.state.comments]
                    });
                    // Handle request
                    this.submit(singleComment, type, "addingComment");
                }
                break;
            case 'appointment':
                if(singleAppointment.body.length !== 0) {
                    // Render loader
                    this.setState({
                        loader: {...this.state.loader, "addingAppointment": true}, 
                        singleAppointment: {...singleAppointment, "isTyping": false,
                        appointments: [singleAppointment, ...this.state.appointments]
                    }});
                    // Handle request
                    this.submit(singleAppointment, type, "addingAppointment");
                }
                break;
            case 'share':
                if(singleSharedLink.body.length !== 0) {
                    // Render loader
                    this.setState({
                        loader: {...this.state.loader, "addingShare": true}, 
                        singleSharedLink: {...singleSharedLink, "isTyping": false},
                        share_links: [singleSharedLink.body, ...this.state.share_links]
                    });
                    // Handle request
                    this.submit(singleSharedLink.body, type, "addingShare");
                }
                break;
            case 'chat':
                if(singleChat.body.length !== 0) {
                    // Render loader
                    this.setState({
                        loader: {...this.state.loader, "addingChat": true }, 
                        singleChat: {...singleChat, "isTyping": false},
                        chat_links: [singleChat.body, ...this.state.chat_links]
                    });
                    // Handle request
                    this.submit(singleChat.body, type, "addingChat");
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { name, email, facebookAccount, instagramAccount, tel, website, status, qualification_status, isTyping, nameValid, emailValid, error,
            observation, tags, engagement_rate, likes, comments, appointments, chat_links, share_links, loading, created_at } = this.state;
        const { singleComment, singleAppointment, singleSharedLink, singleChat } = this.state;
        const { statsLoading, infosLoading, addingComment, addingAppointment, addingShare, addingChat } = this.state.loader;
        
        return (
            <section>
                {loading ? <BigLoader /> :
                <div className="container-fluid add__lead">
                    <div className="row my-3 pb-3 align-items-center lead-creation">
                        <div className="col-sm-12"><h5>Date: <DateFormat date={created_at} /></h5></div>
                        <div className="col-sm-12 col-md-4">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3 flex-1">Conversion Rate:</h4>
                                <div className="d-flex align-items-center">
                                    <input id="engagement__rate" name="engagement_rate" onChange={(e) => this.handleInputChange(e)} type="number" value={engagement_rate} className="form-control" /><h3 className="ml-1 mb-0">%</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3">Status:</h4>
                                <div className="">
                                    <select  defaultValue={status} onChange={(e) => this.handleInputChange(e)} name="status" className="form-control">
                                        <option>Lead</option>
                                        <option>Client</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3">Qualification Status:</h4>
                                <div className="">
                                    <select  defaultValue={qualification_status} onChange={(e) => this.handleInputChange(e)} name="qualification_status" className="form-control">
                                        <option>Qualified</option>
                                        <option>Averagely Qualified</option>
                                        <option>Not Qualified</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 mt-2 d-flex justify-content-end">
                            <button disabled={statsLoading} onClick={(e) => this.handleStatsSubmit(e)} className="button">{statsLoading ? <Loader/>:"Save"}</button>
                        </div>
                    </div>
                    <hr/>

                    <form>
                        <h4 className="mb-4 pb-2 text-uppercase">Personnal Informations</h4>
                        <div className="form-bloc">
                            {error&&error.length ? <div className="alert alert-danger">{error}</div>:null}
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Name</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} value={name} name="name" className="form-control" placeholder="Enter Name" />
                                        {isTyping&&!nameValid ? <div style={{color: "red"}}>This field is empty.</div>:null}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Facebook Account</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} value={facebookAccount} name="facebookAccount" className="form-control" placeholder="Facebook Account" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Instagram Account</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} value={instagramAccount} name="instagramAccount" className="form-control" placeholder="Instagram Account" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Email Address</span>
                                        <input type="email" onChange={(e) => this.handleInputChange(e)} value={email} name="email" className="form-control" placeholder="Email Address" />
                                        {isTyping&&!emailValid ? <div style={{color: "red"}}>Invalid Field  email address.</div>:null}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Phone Number</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} value={tel} name="tel" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <span>Website</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} value={website} name="website" className="form-control" placeholder="Website" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-8">
                                    <div className="form-group">
                                        <span>Tags (Separate with commas)</span>
                                        <input type="text" onChange={(e) => this.handleInputChange(e)} className="form-control" name="tags" value={tags} placeholder="Enter Tags" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                    <span>Number of Likes</span>
                                        <input type="number" onChange={(e) => this.handleInputChange(e)} className="form-control" name="likes" value={likes} placeholder="Number of Likes" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <span>Describe a the lead</span>
                                        <textarea onChange={(e) => this.handleInputChange(e)} placeholder="Obsevations about the lead (Ex: Not very ideal...)" name="observation" className="form-control mt-2" rows="2">{observation}</textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12 d-flex justify-content-end">
                                    <button disabled={infosLoading} onClick={(e) => this.handleSubmitPersonnalInfos(e)} className="button">{infosLoading ? <Loader/>:"Save"}</button>
                                </div>
                            </div>
                        </div>

                        <h4 className="mb-4 pb-2 mt-5 text-uppercase">More Informations</h4>
                        <div className="form-bloc moreinfos">
                            <div className="row mt-4">
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label>Add a new comment</label>
                                        <textarea value={singleComment.body} onChange={(e) => this.handleInputChangeInfos(e)} name="singleComment" id="body" placeholder="Enter a new comment" className="form-control" rows="3"></textarea>
                                        {singleComment.isTyping&&singleComment.body.length === 0 ? <div style={{color: "red"}}>This field must not be empty.</div>:null}
                                        <input value={singleComment.link} name="singleComment" id="link" onChange={(e) => this.handleInputChangeInfos(e)} type="text" className="form-control" placeholder="Enter Link to the comment" />
                                        <div className="d-flex justify-content-end">
                                            <button disabled={addingComment} onClick={(e) => this.handleSubmitOtherInfos(e, "comment")} className="button">{addingComment ? <Loader />: "Add"}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label>Add a new Appointment</label>
                                        <textarea  value={singleAppointment.body} onChange={(e) => this.handleInputChangeInfos(e)} name="singleAppointment" id="body" placeholder="Enter Appointment details" className="form-control" rows="3"></textarea>
                                        {singleAppointment.isTyping&&singleAppointment.body.length === 0 ? <div style={{color: "red"}}>This field must not be empty.</div>:null}
                                        <input value={singleAppointment.link} name="singleAppointment" onChange={(e) => this.handleInputChangeInfos(e)} id="link" type="text" className="form-control" placeholder="Enter Link to the Appointment if available" />
                                        <div className="d-flex justify-content-end">
                                            <button disabled={addingAppointment} onClick={(e) => this.handleSubmitOtherInfos(e, "appointment")} className="button">{addingAppointment ? <Loader />: "Add"}</button>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label>Add a Private Chat Link Or Chat Platform</label>
                                        <textarea value={singleChat.body} name="singleChat" id="body" onChange={(e) => this.handleInputChangeInfos(e)} placeholder="Paste Private Chat Link or Chat Platform name" className="form-control"  rows="3"></textarea>
                                        {singleChat.isTyping&&singleChat.body.length === 0 ? <div style={{color: "red"}}>This field must not be empty.</div>:null}
                                        <div className="d-flex justify-content-end">
                                            <button disabled={addingChat} onClick={(e) => this.handleSubmitOtherInfos(e, "chat")} className="button">{addingChat ? <Loader />: "Add"}</button>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-sm-12 col-md-6">
                                    <div className="form-group">
                                        <label>Add a Shared Link</label>
                                        <textarea value={singleSharedLink.body} name="singleSharedLink" id="body" onChange={(e) => this.handleInputChangeInfos(e)} placeholder="Paste the Shared link" className="form-control"  rows="3"></textarea>
                                        {singleSharedLink.isTyping&&singleSharedLink.body.length === 0 ? <div style={{color: "red"}}>This field must not be empty.</div>:null}
                                        <div className="d-flex justify-content-end">
                                            <button disabled={addingShare} onClick={(e) => this.handleSubmitOtherInfos(e, "share")} className="button">{addingShare ? <Loader />: "Add"}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-bloc mt-5 mb-5 pb-5">
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Comments <span className="badge badge-secondary">{comments.length}</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Appointments <span className="badge badge-secondary">{appointments.length}</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Private Chats <span className="badge badge-secondary">{chat_links.length}</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="shares-tab" data-toggle="tab" href="#shares" role="tab" aria-controls="shares" aria-selected="false">Shares <span className="badge badge-secondary">{share_links.length}</span></a>
                                    </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active pt-5" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            {comments.map(comment => (
                                                <div className="single d-flex">
                                                    <p>{comment.body}</p>
                                                    <a href={comment.link} target="_blank"><FaExternalLinkAlt /></a>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="tab-pane fade pt-5" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            {appointments.map(appointment => (
                                                <div className="single d-flex">
                                                    <p>{appointment.body}</p>
                                                    <a href={appointment.link} target="_blank"><FaExternalLinkAlt /></a>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="tab-pane fade pt-5" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            {chat_links.map(chat => (
                                                <div className="single d-flex">
                                                    <p>{chat}</p>
                                                    {chat.includes("http") &&<a href={chat} target="_blank"><FaExternalLinkAlt /></a>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="tab-pane fade pt-5" id="shares" role="tabpanel" aria-labelledby="shares-tab">
                                            {share_links.map(share => (
                                                <div className="single d-flex">
                                                    <p>{share}</p>
                                                    {share.includes("http") &&<a href={share} target="_blank"><FaExternalLinkAlt /></a>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>}
            </section>
        )
    }
}

export default LeadCreation;