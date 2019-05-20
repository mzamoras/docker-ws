import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import {withStyles} from "@material-ui/core";

const localCss = theme => {
    return {
        root: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: '#F5F5F5',
            userSelect: 'none'
        },
        mainCard:{
            margin: 'auto',
            maxWidth: 450
        },
        routes: {

        }
    }
};

const MainPage = ( {classes} ) => {
    return(
        <div className={classes.root}>
            <Card raised={false} className={classes.mainCard}>
                <CardHeader
                    title='Customizable React and Svelte Apps' subheader='Based on Create-React-App'/>
                <CardContent>
                    <Typography component="p" gutterBottom>
                        This <strong>npmjs</strong> package has been created to extend some of the
                        capabilities of create-react-app (CRA). In order to customize CRA there is
                        basically this need to eject the app and be unable to keep all CRA's utilities
                        updated.
                    </Typography>
                    <Typography component="p" gutterBottom>
                        With our CustomCRA you can provide and extend some of the basic configurations
                        of CRA, such as:
                    </Typography>

                </CardContent>
            </Card>
            <div className={classes.routes}>
                PAGE A, PAGE B
            </div>
        </div>
    );
};

export default  withStyles(localCss)(MainPage);