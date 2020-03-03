import React from 'react';

import {Provider } from 'react-redux';
import  { BrowserRouter , Switch } from 'react-router-dom';
import Store from "./reducer/index";
import { Admin } from './routes/Admin';

class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Switch>
                        <Admin />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default (App);