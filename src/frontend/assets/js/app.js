import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import App from '../../react/AppBase';

import '../less/app.less';
import '../css/app.css';

const mountPoint = document.getElementById('appRoot');

function render() {
    return ReactDOM.render(
        <CssBaseline>
            <App />
        </CssBaseline>, mountPoint);
}

render();