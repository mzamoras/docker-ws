import * as React from 'react';
import { Route } from 'react-router-dom';

export default ({ component: Component, childProps, ...allProps })=>(
    <Route {...allProps} render={ props => (
        <Component {...props} {...childProps}/>
    )}/>
)