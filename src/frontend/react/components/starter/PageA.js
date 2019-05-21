import React, {Component} from 'react';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import RoutesBar from '../utilities/RoutesBar';
import {withStyles} from "@material-ui/core";

const localCss = theme => {
    return {
        root: {
            ...theme.customs.basePageStructure,
            backgroundColor: '#FF9E80'
        },
        mainCard:{
            margin: 'auto',
            maxWidth: 450
        }
    }
};

class PageA extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Card raised={false} className={classes.mainCard}>
                    <CardHeader
                        title='Content Demo Page APP' subheader='This is a demo content'/>
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
                <RoutesBar location={this.props.location}/>
            </div>
        );
    }
}

export default withStyles(localCss)(PageA);