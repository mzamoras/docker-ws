import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import shared from './shared';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

export default function (style = 'light') {
    const baseTheme = createMuiTheme({
        typography: {
            useNextVariants: true
        }
    });
    const theme = {
        palette: {
            primary: red,
            secondary: blue,
            type: style
        },
        typography: {
            useNextVariants: true
        },
        customs: {
            ...shared()
        },
        overrides: {
            MuiInput: {
                underline: {
                    '&:before': {
                        borderBottomColor: baseTheme.palette.divider
                    },
                    '&:hover:not($disabled):not($focused):not($error):before': {
                        borderBottom: `1px solid ${baseTheme.palette.action.disabled}`,
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            borderBottom: `1px solid inherited`,
                        },
                    },
                }
            }
        },
        props: {
            MuiInputLabel: {
                shrink: true
            }
        }
    };
    return createMuiTheme(theme);
}