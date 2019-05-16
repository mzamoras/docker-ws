import { hot } from 'react-hot-loader'
import * as React from 'react';
//import { MemoryRouter, Route, Link } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import defaultTheme from './themes/default';
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import config, { getStoreHistory } from './reduxStore/config';
import '../assets/less/app.less';
import '../assets/css/app.css';
import App from './App';

const reduxStore = config();
const history = getStoreHistory();

class BaseApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            themeStyle: 'light'
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    handleThemeChange() {
        this.setState({
            themeStyle: this.state.themeStyle === 'light' ? 'dark' : 'light'
        });
    }

    render(){
        return (
            <CssBaseline>
                <Provider store={reduxStore}>
                    <ConnectedRouter history={history}>
                        <MuiThemeProvider theme={defaultTheme(this.state.themeStyle)}>
                            <App onThemeChange={this.handleThemeChange} currentThemeStyle={this.state.themeStyle}/>
                        </MuiThemeProvider>
                    </ConnectedRouter>
                </Provider>
            </CssBaseline>
        );
    }
}
export default hot(module)(BaseApp);
