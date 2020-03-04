import React from 'react';
import { Table } from 'react-bootstrap';
import { FaEllipsisV, FaPlusCircle } from 'react-icons/fa';
import LeadCreationModalForm from '../../components/LeadCreationModalForm/LeadCreationModalForm';
import './Lead.scss';
import { Link } from 'react-router-dom';

class Lead extends React.Component {

    state = {
        showModal: false
    }

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row top align-items-center">
                        <div className="col-sm-12 col-md-3">
                            <h4 className="mb-3 font-weight-bold">LEAD MANAGEMENT</h4>
                        </div>
                        <div className="col-sm-12 col-md-3 d-flex justify-content-lg-end">
                            <div className="form-group">
                                <label>Filter by Qualification Status</label>
                                <select id="inputState" defaultValue="All" className="form-control">
                                    <option>All</option>
                                    <option>Qualified</option>
                                    <option>Averagely Qualified</option>
                                    <option>Not Qualified</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 d-flex justify-content-lg-end">
                            <div className="form-group">
                                <label>Choose Social Network</label>
                                <select id="inputState" defaultValue="All" className="form-control">
                                    <option>All</option>
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 d-flex justify-content-lg-end">
                            <button onClick={() => this.setState({ showModal: !this.state.showModal })} id="create__lead" className="button" data-toggle="tooltip" data-placement="bottom" title="Click to add a Lead">
                                <FaPlusCircle /> <span>Add Lead</span>
                            </button>
                        </div>
                    </div>
                    <hr />

                    <div className="row mt-5 leadlist pt-4 pb-4">
                        <div className="col-sm-12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Comments</th>
                                        <th>Shares</th>
                                        <th>Private Chats</th>
                                        <th>Appointments</th>
                                        <th>Engagement Rate</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Jacob</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Thornton</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@fat</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Jacob</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Thornton</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@fat</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Jacob</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Thornton</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@fat</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Jacob</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Thornton</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@fat</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="av-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="av-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="av-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="not-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="not-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Mark</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Otto</td>
                                        <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>@mdo</td>
                                        <td>
                                            <div className="dropdown">
                                                <div className="dropbtn"><FaEllipsisV /></div>
                                                <div className="dropdown-content">
                                                    <Link to="/dashboard/lead/edit">Edit</Link>
                                                    <a href="#">Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-sm-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Modal For Lead Creation */}
                    <LeadCreationModalForm showModal={this.state.showModal} navigate={this.props.history} onCloseModal={() => this.setState({showModal: false})} />
                    {/* End Modal For Lead Creation */}
                </div>
            </section>
        );
    }
}

export default Lead;