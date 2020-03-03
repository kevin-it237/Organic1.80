import React, {Fragment} from 'react';
import  { Route } from 'react-router-dom';

import { Main } from '../scenes/Main/Main';
import {About} from '../scenes/About/About';
import Login from '../scenes/Auth/Login'
import SignUp from '../scenes/Auth/SignUp'

export class Admin extends React.Component {

    render(){
        return(
            <Fragment>
                <Route exact path="/" component={Main} />
                <Route path="/dashboard" component={Main} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/signup"} component={SignUp} />
            </Fragment>
        )
    }
}