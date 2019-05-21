import update from 'immutability-helper';

const initialState = {
    theme: 'default',
    themeStyle: 'light',
};

export default function reducer(state = initialState, action = {}) {

    Object.freeze(state);

    switch (action.type) {

        case UPDATE_THEME:
            return update(state, {
                theme: { $set: action.data.theme }
            });

        case UPDATE_THEME_STYLE:
            return update(state, {
                themeStyle: { $set: action.data.style }
            });

        default:
            return state;
    }
};

export const actions = {};


// A C T I O N S
const UPDATE_THEME = 'UPDATE_THEME';
const UPDATE_THEME_STYLE = 'UPDATE_THEME_STYLE';

actions.changeThemeStyle = function (style) {
    return {
        type: UPDATE_THEME_STYLE,
        data: { style }
    };
};

actions.changeTheme = function (theme) {
    return {
        type: UPDATE_THEME_STYLE,
        data: { theme }
    };
};