import React, {useState} from 'react';

import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CardHeader from '@material-ui/core/CardHeader/index';
import Typography from '@material-ui/core/Typography/index';
import Collapse from '@material-ui/core/Collapse';

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
        }
    }
};

const MainPage = ( {classes, location} ) => {
    const [isOpen, setOpen] = useState(false);
    function setCollapserToggle(){
        setOpen(!isOpen);
    }
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
                        <button onClick={setCollapserToggle}>DALE</button>
                    </Typography>
                    <Typography component="p" gutterBottom>
                        With our CustomCRA you can provide and extend some of the basic configurations
                        of CRA, such as:
                    </Typography>
                </CardContent>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
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