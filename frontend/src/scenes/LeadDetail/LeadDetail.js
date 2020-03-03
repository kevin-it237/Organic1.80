import React from 'react';
import './LeadDetail.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class LeadDetail extends React.Component {
    state = {

    }

    render() {
        return (
            <section>
                <div className="container-fluid add__lead">
                    <div className="row my-3 pb-3 align-items-center justify-content-between lead-detail">
                        <div className="col-sm-12"><h5>Date: 12/05/2020</h5></div>
                        <div className="col-sm-12 col-md-3">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3">Engagement Rate:</h4>
                                <h4 className="font-weight-bold text-uppercase badge badge-warning">0%</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3">Status:</h4>
                                <h4 className="font-weight-bold text-uppercase badge badge-info">Lead</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="d-flex flex-row align-items-center box">
                                <h4 className="font-weight-bold text-uppercase mr-3">Qualification Status:</h4>
                                <h4 className="font-weight-bold text-uppercase badge badge-success">Qualified</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-end">
                            <Link to="/dashboard/lead/edit" className="button">Edit Lead</Link>
                        </div>
                        <div className="col-sm-12 mt-4">
                            <div class="alert alert-info" role="alert">
                                Not very ideal. Into digital marketing for real estates . Not active with marketing 
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <form>
                        <h4 className="mb-4 pb-2 text-uppercase">Personnal Informations</h4>
                        <div className="form-bloc">
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="text" disabled value="Clark Hypo" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="text" disabled value="www.facebook.com/kev" className="form-control" id="instagram" aria-describedby="emailHelp" placeholder="Facebook Account" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="text" disabled value="www.instagram.com/kev" className="form-control" id="instagram" aria-describedby="emailHelp" placeholder="Instagram Account" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="email" disabled value="clark@gmail.com" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="text" disabled className="form-control" id="tel" aria-describedby="emailHelp" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <input type="text" disabled className="form-control" id="website" aria-describedby="emailHelp" placeholder="Website" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="mb-4 pb-2 mt-5 text-uppercase">More Informations</h4>
                        
                        <div className="form-bloc mt-5 mb-5 pb-5">
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Comments <span className="badge badge-secondary">1</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Appointments <span className="badge badge-secondary">2</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Private Chats <span className="badge badge-secondary">1</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="shares-tab" data-toggle="tab" href="#shares" role="tab" aria-controls="shares" aria-selected="false">Shares <span className="badge badge-secondary">2</span></a>
                                    </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active pt-5" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.</p>
                                                <a href="#"><FaExternalLinkAlt /></a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade pt-5" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.</p>
                                            </div>
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade pt-5" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur</p>
                                                <a href="#"><FaExternalLinkAlt /></a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade pt-5" id="shares" role="tabpanel" aria-labelledby="shares-tab">
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur</p>
                                                <a href="#"><FaExternalLinkAlt /></a>
                                            </div>
                                            <div className="single d-flex">
                                                <p>Et et consectetur ipsum labore excepteur est proident excepteur</p>
                                                <a href="#"><FaExternalLinkAlt /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default LeadDetail;