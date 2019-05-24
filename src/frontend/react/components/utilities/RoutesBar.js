import React from 'react';
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import MaterialLink from '@material-ui/core/Link';
import OptionalComponent from './OptionalComponent';

const localCss = {
    routes: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
        padding: '15px 35%',
        top: 25
    },
    linkWrapper:{
        padding: '0 5px',
        margin: 'auto'
    }
};

const RouterBar =  ({classes, location = {}}) => {
    const {pathname} = location;
    return (
        <div className={classes.routes}>
            <OptionalComponent  hidden={pathname === '/'} className={classes.linkWrapper}>
                <MaterialLink component={Link} to={'/'} variant="button">
                    Main Page
                </MaterialLink>
            </OptionalComponent>
            <OptionalComponent hidden={pathname === '/a'} className={classes.linkWrapper}>
                <MaterialLink component={Link} to={'/a'} variant="button">
                    Page A
                </MaterialLink>
            </OptionalComponent>
            <OptionalComponent hidden={pathname === '/b'} className={classes.linkWrapper}>
                <MaterialLink component={Link} to={'/b'}  variant="button">
                    Page B
                </MaterialLink>
            </OptionalComponent>
            <OptionalComponent hidden={pathname === '/c'} className={classes.linkWrapper}>
                <MaterialLink component={Link} to={'/c'} variant="button">
                    Page C
                </MaterialLink>
            </OptionalComponent>
            <OptionalComponent hidden={pathname === 'd'} className={classes.linkWrapper}>
                <MaterialLink component={Link} to={'/d'} variant="button">
                    Page D
                </MaterialLink>
            </OptionalComponent>
        </div>
    );
};

export default withStyles(localCss)(RouterBar) ;