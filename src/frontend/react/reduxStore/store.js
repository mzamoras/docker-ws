import update from 'immutability-helper';
import uniqid from 'uniqid';

const defaultProfile = (newData) => {
    return Object.assign({}, {
        id: uniqid(),
        name: '',
        username: '',
        password: '',
        email: '',
        configuration: {}
    }, newData);
};

const initialState = {
    currentProfile: null,
    userProfiles: [],
    userPreferences: {
        theme: 'default',
        themeStyle: 'default'
    },
    modalStatus: {}
};

export default function reducer(state = initialState, action = {}) {

    Object.freeze(state);

    switch (action.type) {

        case UPDATE_THEME:
            return update(state, {
                userPreferences: {
                    theme: { $set: action.data.theme }
                }
            });

        case UPDATE_THEME_STYLE:
            return update(state, {
                userPreferences: {
                    themeStyle: { $set: action.data.style }
                }
            });

        case CHANGE_CURRENT_PROFILE:
            return update(state, {
                currentProfile: { $set: action.data.currentProfileId }
            });

        case CREATE_PROFILE:
            const profileData = defaultProfile(action.data.profileData);
            return update(state, {
                userProfiles: {
                    $push: [profileData]
                },
                currentProfile: { $set: profileData.id }
            });

        case UPDATE_PROFILE:
            const profileIndex = state.userProfiles.findIndex(profile => profile.id === action.data.profileId);
            return update(state, {
                userProfiles: {
                    [profileIndex]: {
                        $set: Object.assign(
                            {},
                            state.userProfiles[profileIndex],
                            action.data.profileData
                        )
                    }
                }
            });

        case UPDATE_MODAL_STATUS:
            return update(state, {
                modalStatus: {
                    [action.data.modal]: {
                        $set: state.modalStatus[action.data.modal]
                            ? !state.modalStatus[action.data.modal]
                            : true
                    }
                }
            });

        default:
            return state;
    }
};

export const actions = {};


// A C T I O N S
const UPDATE_THEME = 'UPDATE_THEME';
const UPDATE_THEME_STYLE = 'UPDATE_THEME_STYLE';
const CREATE_PROFILE = 'CREATE_PROFILE';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_MODAL_STATUS = 'UPDATE_MODAL_STATUS';
const CHANGE_CURRENT_PROFILE = 'CHANGE_CURRENT_PROFILE';

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

actions.updateProfile = function (profileData, profileId = null) {
    return {
        type: profileId ? UPDATE_PROFILE : CREATE_PROFILE,
        data: {
            profileData,
            ...(profileId && { profileId })
        }
    };
};

actions.changeCurrentProfile = function (currentProfileId) {
    return {
        type: CHANGE_CURRENT_PROFILE,
        data: { currentProfileId }
    };
};

actions.updateModalStatus = function (modal) {
    return {
        type: UPDATE_MODAL_STATUS,
        data: { modal }
    };
};