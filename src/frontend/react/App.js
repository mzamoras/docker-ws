import React, {Fragment, Component} from 'react';
import * as Proptypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import InvertColors from '@material-ui/icons/InvertColors';
import InvertColorsOff from '@material-ui/icons/InvertColorsOff';
import Favorite from '@material-ui/icons/Favorite';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import ima from '../assets/images/gadgets-iphone-laptop-163143.jpg';

const localCss = theme => {
    return{
        base: {
            position: 'absolute',
            top: 0,
            left:0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        root:{
            width: '55%',
            zIndex: 1,
            //minHeight: 450,
            //padding: 20
        },
        floatThemeChanger:{
            position: 'absolute',
            right:20,
            top: 20
        },
        footerLabel: {
            padding: 20,
            textAlign: 'center',
            opacity: 0.3
        },
        footerLabelIcon: {
            fontSize: '16px',
            verticalAlign: 'bottom',
            margin: '0 5px',
            color: "#CC0000"
        },
        media: {
            objectFit: 'cover',
        },
        tagLabelsContainer:{
            userSelect:'none',
            left: '77.5%',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            height: 300,
            marginTop:-100,
            marginLeft: -5,
            zIndex:0,
            '& > div':{
                margin: '3px 0',
                border: '1px solid green',
                padding: 10,
                borderRadius: '0 4px 4px 0',
                '&:hover':{
                    paddingLeft:20,
                }
            }
            //border: '1px solid red',*/
        }
    }
};

class App extends Component{

    render() {
        return (
            <Card square={true} raised={false} className={this.props.classes.base}>
                <div className={this.props.classes.floatThemeChanger}>
                    <IconButton onClick={this.props.onThemeChange}>
                        { this.props.currentThemeStyle === 'light'
                            ? <InvertColors color="primary"/>
                            : <InvertColorsOff/>
                        }
                    </IconButton>
                </div>
                <Card raised={true} className={this.props.classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="340"
                            image={ima}
                            className={this.props.classes.media}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                MiKE ZaMoRA | <b>Software Engineer</b>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Working Front End</b><br/>
                                15+ years Using FrontEnd Technologies
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                15+ years as FrontEnd Developer<br/>
                                15+ years as BackEnd Developer<br/>
                                5+ years as FullStack Developer<br/>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className={this.props.classes.tagLabelsContainer}>
                    <div>Experience</div>
                    <div>Projects</div>
                    <div>Technologies</div>
                    <div>Technologies</div>
                </div>
                <Typography className={this.props.classes.footerLabel}>
                    <span>
                        Created with
                        <Icon className={this.props.classes.footerLabelIcon}>favorite</Icon>
                        in Monterrey, MEX.
                    </span><br/>
                    <span>
                        by MiKE ZAMoRA
                    </span>
                </Typography>
            </Card>
        )
    }
}

App.propTypes = {
  onThemeChange: Proptypes.func,
  currentThemeStyle: Proptypes.string
};


export default withStyles(localCss)(App);