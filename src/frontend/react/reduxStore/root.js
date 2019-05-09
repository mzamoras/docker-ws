import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import mainStore from './store';


const appReducer = history => combineReducers({ router: connectRouter(history), mainStore });

const root = history => {
    return (state, action) => {

        if (action.type === 'RESET') {
            console.log('\u2757\uFE0F\u2757\uFE0F RESETTING STORE');
            state = { router: state.router }
        }
        return appReducer(history)(state, action)
    }
};

export default root;