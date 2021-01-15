import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import RestoService from './services/resto-service';
import ErrorBoundry from './components/error-boundry';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();
// restoService.getMenuItems().then(res => console.log(res))

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    
    , document.getElementById('root'));

