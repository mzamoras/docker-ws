import * as React from 'react';
import {withStyles} from "@material-ui/core";
import InvertColors from '@material-ui/icons/InvertColors';
import InvertColorsOff from '@material-ui/icons/InvertColorsOff';
import IconButton from "@material-ui/core/IconButton";

const localCss = theme => {
    return {
        root:{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 40,
            height: 40,
            zIndex: 1
        },
        contrastIcon:{
            color: theme.palette.background.paper
        }
    }
};

const ThemeChanger = ({classes, onThemeStyleChange, themeStyle}) => {
    return(
        <div className={classes.root}>
            <IconButton onClick={onThemeStyleChange}>
                { themeStyle === 'light'
                    ? <InvertColors/>
                    : <InvertColorsOff/>
                }
            </IconButton>
        </div>
    )
};

export default withStyles(localCss)(ThemeChanger);