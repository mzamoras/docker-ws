import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import App from '../../react/AppBase';

import '../less/app.less';
import '../css/app.css';

import { Provider } from 'react-redux';
import config, { getStoreHistory } from '../../react/reduxStore/config';
import {ConnectedRouter} from "connected-react-router";

const reduxStore = config();
const history = getStoreHistory();


const mountPoint = document.getElementById('appRoot');

function render() {
    return ReactDOM.render(
        <CssBaseline>
            <Provider store={reduxStore}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        </CssBaseline>, mountPoint);
}

render();