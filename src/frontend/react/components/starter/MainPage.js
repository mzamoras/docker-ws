import React, {useState} from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardHeader from '@material-ui/core/CardHeader/index';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography/index';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import RoutesBar from '../utilities/RoutesBar';
import {withStyles} from "@material-ui/core";



const localCss = theme => {
    return {
        root: {
            ...theme.customs.basePageStructure,
            backgroundColor: theme.palette.background.default,
            overflowY: 'auto',
            padding: '140px 0'
        },
        mainCard:{
            margin: 'auto',
            maxWidth: 450
        },
        expandableIcon: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandableIconOpen: {
            transform: 'rotate(180deg)',
        },
        actions: {
            display: 'flex'
        },
        pill:{
            marginLeft: 10,
            backgroundColor: '#CC0000',
            display: 'inline',
            color: theme.palette.getContrastText('#CC0000'),
            padding: '1px 5px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '10px',
        },
        combinedPill:{
            marginLeft: 10,
            display: 'inline',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '10px',
            "& > div" :{
                display: 'inline',
                padding: '1px 5px',
            },
            "& > div:first-child" :{
                display: 'inline',
                padding: '1px 5px',
                color: theme.palette.getContrastText('#CC0000'),
                backgroundColor: '#CC0000',
                borderRadius: '4px 0 0 4px'
            },
            "& > div:last-child" :{
                display: 'inline',
                padding: '1px 5px',
                color: theme.palette.getContrastText('#EE9966'),
                backgroundColor: '#EE9966',
                borderRadius: '0 4px 4px 0'
            }
        }
    }
};

const _REACT = 'react';
const _SVELTE = 'svelte';
const _VUE = 'vue';
const _GEN = 'general';

const addTechnologies = ( name, ..._tec ) => {
    return {
        name,
        technologies: _tec
    }
};
const technologies = [
    addTechnologies('React Latest', _REACT),
    addTechnologies('Vue Latest', _VUE),
    addTechnologies('Svelte Latest', _SVELTE),
    addTechnologies('Redux', _REACT, _VUE, _SVELTE),
    addTechnologies('React-Router', _REACT),
    addTechnologies('Eslint', _GEN),
    addTechnologies('HMR - Hot Reload',  _REACT, _VUE, _SVELTE),
    addTechnologies('Mocha', _GEN),
    addTechnologies('Jasmine', _GEN),
    addTechnologies('Jest', _GEN),
    addTechnologies('Electron', _REACT, _VUE, _SVELTE),
    addTechnologies('Webpack', _GEN),
    addTechnologies('Less', _GEN),
    addTechnologies('Sass', _GEN),
];

const technoListCss = theme => {
    return{
        root:{
            marginLeft: 0,
            paddingLeft: 0,
            '& > li':{
                display: 'flex',
                padding: '0 15px'
            },
            '& > li > div':{
                display: 'inline',
                '&:first-child':{
                    flex: 'auto',
                }
            },
            '& > li > div:last-child > span' :{

                textTransform: 'uppercase',
                fontWeight: '700',
                fontSize: '10px',
                display: 'inline',
                padding: '1px 5px',

                '&:first-child':{
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    paddingLeft: 8
                },
                '&:last-child':{
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 4,
                    paddingRight: 8
                }
            }
        },
        react: {
            backgroundColor: '#61DAFB',
            color: theme.palette.getContrastText('#61DAFB')
        },
        svelte: {
            backgroundColor: '#FF3E00',
            color: theme.palette.getContrastText('#FF3E00')
        },
        vue: {
            backgroundColor: '#40B883',
            color: '#FFF'
        },
        general: {
            backgroundColor: theme.palette.divider,
            opacity: 0.6
        },
        icon:{
            fontSize: 16,
            verticalAlign: 'text-bottom'
        }
    }
};

const _TechnoList = ({classes}) => {
    return(
        <Typography paragraph component='ul' className={classes.root} gutterBottom>
            {technologies.map( el => {
                return(
                    <li key={el.name}>
                        <div><Icon className={classes.icon}>check_box</Icon> {el.name}</div>
                        <div>
                            {el.technologies.map( t => (
                                 <Typography key={t} className={classes[t]} component="span">
                                     {t}
                                 </Typography>
                            ) )}
                        </div>
                    </li>
                )
            } )}
        </Typography>
    )
};

const TechnoList = withStyles(technoListCss)(_TechnoList);

const ReactPill = props => <div {...props}>React</div>;
const SveltePill = props => <div {...props}>Svelte</div>;
const BothPill = props => <div {...props}><ReactPill/><SveltePill/></div>;

const MainPage = ( {classes, location} ) => {
    const [isOpen, setOpen] = useState(true);
    function toggleCollapse(){
        setOpen(!isOpen);
    }
    const expandableIconClass = classNames( classes.expandableIcon, {
        [classes.expandableIconOpen]: isOpen
    });
    const RP = ()=> <ReactPill className={classes.pill}/>;
    const SP = () => <SveltePill className={classes.pill}/>;
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
                <CardActions className={classes.actions} disableActionSpacing>
                    <div>
                        <IconButton onClick={toggleCollapse}>
                            <Icon className='fab fa-github'/>
                        </IconButton>
                    </div>
                    <IconButton onClick={toggleCollapse} className={expandableIconClass}>
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Divider variant="middle" />
                        <br/>
                        <Typography variant="h5" gutterBottom>
                            Pre-Configured for
                        </Typography>
                        <TechnoList/>
                        <Typography paragraph>
                            This pack takes <strong>React Create App</strong> as starting point to extend
                            its basic capabilities, since it only provides a very basic boilerplate we thought
                            extending some options the opportunities to start creating an app right away are endless.
                        </Typography>
                        <Typography paragraph>
                            Go check our github repo to learn more about some cool included features.
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
            <RoutesBar location={location}/>
        </div>
    );
};

export default withStyles(localCss)(MainPage);