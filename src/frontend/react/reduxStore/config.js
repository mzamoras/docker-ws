import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import root from './root';

const isDev = process.env.NODE_ENV !== 'production';
const devTools = window['__REDUX_DEVTOOLS_EXTENSION__'] && isDev ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;
const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];


if (isDev) {
    const createLogger = require('redux-logger').createLogger;
    middleware.push(createLogger({
        collapsed: true
    }));
}

export function getStoreHistory() {
    return history;
}

export default function configureStore(initialState) {
    const store = createStore(
        root(history),
        initialState,
        compose(
            applyMiddleware(...middleware),
            devTools
        )
    );

    if (module['hot']) {

        module['hot'].accept('./root', () => {
            const nextReducer = require('./root')['default'];
            store.replaceReducer(nextReducer);
        });

    }

    return store;
}