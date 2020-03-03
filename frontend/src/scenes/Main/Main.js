import React, { Fragment } from 'react';
import {NavLink, Route} from 'react-router-dom';

import { Header } from '../../globalComponents/Header/Header';
import {LandingPage} from '../LandingPage/LandingPage';
import Lead from '../Lead/Lead';
import LeadDetail from '../LeadDetail/LeadDetail';
import LeadCreation from '../LeadCreation/LeadCreation';
import Notifications from '../Notifications/Notifications';
import './Main.scss';

export class Main extends React.Component {

    render(){
        return(
            <Fragment>
                <Header/>

                <section className="admin">
                    <div className="main-container">
                        <div className="left-content d-flex flex-column">
                            <div className="menu mt-5">
                                <div className="navbar-brand" to="/">
                                    <h3 className="d-inline align-middle">ANALYSIS</h3>
                                </div>
                                <NavLink to="/dashboard/home">Global View</NavLink> 
                                <hr />
                                <NavLink to="/dashboard/lead/detail">Detailed View</NavLink> 
                                <div className="navbar-brand" to="/a">
                                    <h3 className="d-inline align-middle">LEAD</h3>
                                </div> 
                                <NavLink to="/dashboard/leads">Lead Management</NavLink> 
                                <hr />
                                <NavLink to="/dashboard/notifications">Notifications</NavLink> 
                                <hr />
                            </div>
                        </div>
                        <div className="right-content">
                            {/* Admin Component */}
                            <Fragment>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/dashboard" component={LandingPage} />
                                <Route exact path="/dashboard/home" component={LandingPage} />
                                <Route exact path="/dashboard/leads" component={Lead} />
                                <Route exact path="/dashboard/lead/new" component={LeadCreation} />
                                <Route exact path="/dashboard/lead/detail" component={LeadDetail} />
                                <Route exact path="/dashboard/lead/edit" component={LeadCreation} />
                                <Route exact path="/dashboard/notifications" component={Notifications} />
                            </Fragment>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}