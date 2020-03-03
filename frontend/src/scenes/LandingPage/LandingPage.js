import React from 'react';
import './LandingPage.scss';
import { FaQuestionCircle, FaEllipsisV } from 'react-icons/fa';
import { Table  } from 'react-bootstrap';
import { LeadBarChart } from '../../components/BarChart/BarChart'
import { Link } from 'react-router-dom';

const data = [
    {
      "interval": "Comments",
      "hot dog": 130,
      "friesColor": "hsl(325, 70%, 50%)",
    },
    {
      "interval": "Shares",
      "hot dogColor": "hsl(238, 70%, 50%)",
      "burger": 148,
    },
    {
      "interval": "Private Chat",
      "donut": 80,
      "donutColor": "hsl(137, 70%, 50%)"
    },
    {
      "interval": "Appointments",
      "sandwichColor": "hsl(27, 70%, 50%)",
      "kebab": 50,
    }
];

export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row top align-items-center">
                    <div className="col-sm-6">
                        <h4 className="mb-3 font-weight-bold">GLOBAL ANALYSIS</h4>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-lg-end">
                        <div className="form-group">
                            <label>Choose Social Network</label>
                            <select id="inputState" defaultValue="All" className="form-control">
                                <option>All</option>
                                <option>Facebook</option>
                                <option>Instagram</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row boxes mt-5">
                    <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <div className="box-1">
                                <h4>Total Leads</h4>
                                <a data-toggle="tooltip" data-placement="bottom" title="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages." href="#"><FaQuestionCircle /></a>
                            </div>
                            <h3>23</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <div className="box-1">
                                <h4>Total Engagements</h4>
                                <a data-toggle="tooltip" data-placement="bottom" title="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages." href="#"><FaQuestionCircle /></a>
                            </div>
                            <h3>10</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <div className="box-1">
                                <h4>Average Conversion Rate</h4>
                                <a data-toggle="tooltip" data-placement="bottom" title="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages." href="#"><FaQuestionCircle /></a>
                            </div>
                            <h3>15%</h3>
                        </div>
                    </div>
                </div>

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
                                    <th>Conversion Rate</th>
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
                                    <td className="av-qualified" onClick={() => this.props.history.push("/dashboard/lead/detail")}>Thornton</td>
                                    <td onClick={() => this.props.history.push("/dashboard/lead/detail")}>Jacob</td>
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
                    <div className="col-sm-12 d-flex justify-content-end">
                        <Link className="button ml-auto" to="/leads">View All</Link>
                    </div>
                </div>

                {/* Plot */}
                <div className="row mt-4 mb-5">
                    <div className="col-sm-12 chart">
                        <h4 className="mb-3 font-weight-bold">COLLECTED INFORMATIONS</h4>
                    </div>
                    <div className="col-sm-12 chart">
                        <LeadBarChart data={data} />
                    </div>
                </div>
            </div>
        )
    }
}