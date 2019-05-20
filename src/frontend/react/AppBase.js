import { hot } from 'react-hot-loader'
import * as React from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import defaultTheme from './themes/default';
import AppRoutingSpring from './AppRoutingSpring';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import config, { getStoreHistory } from './reduxStore/config';
import componentLoader from './components/utilities/componentLoader';
import RouteWithProps from './components/utilities/RouteWithProps';

import App from './App';

const LoadedPageA = componentLoader(()=>import('./components/starter/PageA'));
const MainPage = componentLoader(()=>import('./components/base/MainPage'));

const reduxStore = config();
const history = getStoreHistory();

class AppBase extends React.Component{

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
        const childrenProps = {
            onThemeChange: this.handleThemeChange,
            currentThemeStyle: this.state.themeStyle
        };
        return (
                <Provider store={reduxStore}>
                    <ConnectedRouter history={history}>
                        <MuiThemeProvider theme={defaultTheme(this.state.themeStyle)}>
                            <AppRoutingSpring handleThemeChange={this.handleThemeChange} themeStyle={this.state.themeStyle}>
                                {/*<Route exact path='/' render={()=>(
                                    <App onThemeChange={this.handleThemeChange} currentThemeStyle={this.state.themeStyle}/>
                                )}/>*/}
                                <RouteWithProps exact path={'/'} component={MainPage} childProps={childrenProps}/>
                                <Route path={'/a'} component={LoadedPageA}/>
                                <Route path={'/b'} render={()=><div>PATH B</div>}/>
                                <Route path={'/c'} render={()=><div>PATH C</div>}/>
                            </AppRoutingSpring>
                        </MuiThemeProvider>
                    </ConnectedRouter>
                </Provider>
        );
    }
}
export default hot(module)(AppBase);
