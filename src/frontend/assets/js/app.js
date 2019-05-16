import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../react/BaseApp';

const mountPoint = document.getElementById('appRoot');

function render() {
    return ReactDOM.render(<App />, mountPoint);
}

render();