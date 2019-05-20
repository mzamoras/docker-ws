import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";

const localCss = theme => {
    const { transitions } = theme;
    return {
        root:{
            margin: '3px 0',
            padding: '10px 20px 10px 20px',
            borderRadius: '0 4px 4px 0',
            transition: transitions.create('padding', {
                duration: transitions.duration.shorter
            }),
            '&:hover':{
                paddingLeft:50,
            }
        }
    }
};

class TagComponent extends Component{

    render() {
        return (
            <Paper elevation={1} className={this.props.classes.root}>
                <Typography variant="body1">
                    {this.props.children}
                </Typography>
            </Paper>
        );
    }
}

export default withStyles(localCss)(TagComponent);