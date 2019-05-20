import * as React from 'react';
import { useTransition, animated } from 'react-spring';
import { Switch } from 'react-router-dom'
import {connect} from "react-redux";

const AppRoutingSpring =(prp) => {

    const transitions = useTransition(prp.location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    return transitions.map( ({item, props, key})=>(
        <animated.div key={key} style={props} className={"oo22"}>
            <Switch location={item}>
                {prp.children}
            </Switch>
        </animated.div>
    ) )
};

const mapStateToProps = state => ({
    location: state.router.location
});

export default connect(mapStateToProps)(AppRoutingSpring);