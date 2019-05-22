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
            backgroundColor: theme.palette.background.default
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
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
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
                        <Typography variant="h6" gutterBottom>
                            Pre-Configured for
                        </Typography>
                        <Typography paragraph component='ul'>
                            <li>React latest versions <RP/></li>
                            <li>Svelte latest versions <SP/></li>
                            <li>Redux <BothPill className={classes.combinedPill}/></li>
                            <li>React Router</li>
                            <li>Material-UI</li>
                            <li>Eslint</li>
                            <li>HotReloading</li>
                            <li>Mocha</li>
                            <li>Jasmine</li>
                            <li>Jest</li>
                            <li>Electron</li>
                            <li>Webpack</li>
                            <li>LESS</li>
                            <li>SaSS</li>
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                            to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                            cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <RoutesBar location={location}/>
        </div>
    );
};

export default withStyles(localCss)(MainPage);