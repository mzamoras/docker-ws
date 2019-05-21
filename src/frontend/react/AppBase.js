import { hot } from 'react-hot-loader'
import * as React from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import defaultTheme from './themes/default';
import AppRoutingSpring from './AppRoutingSpring';

import {actions} from './reduxStore/store';
import componentLoader from './components/utilities/componentLoader';
import RouteWithProps from './components/utilities/RouteWithProps';
import ThemeChanger from './components/utilities/ThemeChanger';

import {connect} from "react-redux";

const LoadedPageA = componentLoader(()=>import('./components/starter/PageA'));
const MainPage = componentLoader(()=>import('./components/starter/MainPage'));


class AppBase extends React.Component{

    constructor(props){
        super(props);
        this.onThemeChange = this.onThemeChange.bind(this);
    }

    onThemeChange(){
        this.props.changeThemeStyle( this.props.themeStyle === 'light' ? 'dark' : 'light')
    }

    render(){

        const childrenProps = {
            onThemeChange: this.props.changeTheme,
            onThemeStyleChange: this.props.changeThemeStyle,
            currentTheme: this.props.theme,
            currentThemeStyle: this.props.themeStyle,
        };

        return (
            <MuiThemeProvider theme={defaultTheme(this.props.themeStyle)}>
                <ThemeChanger themeStyle={this.props.themeStyle} onThemeStyleChange={this.onThemeChange}/>
                <AppRoutingSpring location={this.props.location}>
                    {/*<Route exact path='/' render={()=>(
                        <App onThemeChange={this.handleThemeChange} currentThemeStyle={this.state.themeStyle}/>
                    )}/>*/}
                    <RouteWithProps exact path={'/'} component={MainPage} childProps={childrenProps}/>
                    <Route path={'/a'} component={LoadedPageA}/>
                    <Route path={'/b'} render={()=><div>PATH B</div>}/>
                    <Route path={'/c'} render={()=><div>PATH C</div>}/>
                </AppRoutingSpring>
            </MuiThemeProvider>
        );
    }
}



const mapStateToProps = ({mainStore, router}) => ({
    theme: mainStore.theme,
    themeStyle: mainStore.themeStyle,
    location: router.location
});
const mapDispatchToProps = {
    changeTheme: actions.changeTheme,
    changeThemeStyle: actions.changeThemeStyle
};
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(AppBase);

export default hot(module)(connectedApp);
