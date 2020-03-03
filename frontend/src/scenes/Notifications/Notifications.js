import React from 'react';
import './Notifications.scss';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

class Notifications extends React.Component {

    state = {
        startDate: new Date()
    };
    
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <section>
                <div className="container-fluid notifications">
                    <div className="row">
                        <div className="col-sm-12"><h4><strong>MANAGE NOTIFICATIONS</strong></h4></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-6">
                            <div className="big_box">
                                <h4 className="mb-4 pb-0"><strong>Add New</strong></h4>
                                <div className="form-group">
                                    <input type="text" className="form-control"  placeholder="Notification Name" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Description" className="form-control" rows="2"></textarea>
                                </div>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange} />
                                <div className="d-flex justify-content-end">
                                    <button className="button mt-3">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="big_box">
                                <h4 className="mb-4 pb-0"><strong>Tasks/Notifications</strong></h4>
                                <div className="notification_item--1">
                                    <h4>Coming</h4>
                                    <h4><span className="badge badge-info">2</span></h4>
                                </div>
                                <div className="notification_item--1">
                                    <h4>Completed</h4>
                                    <h4><span className="badge badge-success">5</span></h4>
                                </div>
                                <div className="notification_item--1">
                                    <h4>Not Completed</h4>
                                    <h4><span className="badge badge-danger">1</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-sm-12"><h4><strong>ALL TASKS/NOTIFICATIONS</strong></h4></div>
                        <div className="col-sm-12 mt-4">
                            <div className="notifications_list">
                                <div className="notification_item--2">
                                    <div>
                                        <h4><strong>Appointment with the client</strong></h4>
                                        <p className="mt-2">Description</p>
                                    </div>
                                    <div className="date_actions">
                                        <p><strong>Date: 02/12/2020</strong></p>
                                        <div className="d-flex justify-content-between mt-2">
                                            <a href="#edit" className="text-success">Edit</a>
                                            <a href="#delete" className="text-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification_item--2">
                                    <div>
                                        <h4><strong>Appointment with the client</strong></h4>
                                        <p className="mt-2">Description</p>
                                    </div>
                                    <div className="date_actions">
                                        <p><strong>Date: 02/12/2020</strong></p>
                                        <div className="d-flex justify-content-between mt-2">
                                            <a href="#edit" className="text-success">Edit</a>
                                            <a href="#delete" className="text-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification_item--2">
                                    <div>
                                        <h4><strong>Call with the client</strong></h4>
                                        <p className="mt-2">Description</p>
                                    </div>
                                    <div className="date_actions">
                                        <p><strong>Date: 02/12/2020</strong></p>
                                        <div className="d-flex justify-content-between mt-2">
                                            <a href="#edit" className="text-success">Edit</a>
                                            <a href="#delete" className="text-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Notifications;