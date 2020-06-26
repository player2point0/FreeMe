import {combineReducers} from 'redux'
import {START_POMODORO, TOGGLE_PAUSE_POMODORO,
    DECREMENT_POMODORO_TIMER, RESET_POMODORO} from './Actions'

const POMODORO_START_TIME = 25 * 60;

const merge = (prev, next) => Object.assign({}, prev, next);

export const initialState = {
    pomodoroStarted: false,
    pomodoroPaused: false,
    pomodoroTimeRemaining: POMODORO_START_TIME,
};

const pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POMODORO:
            return merge(state, {pomodoroStarted: true});
        case TOGGLE_PAUSE_POMODORO:
            if(!state.pomodoroStarted) return state;
            return merge(state, {pomodoroPaused: !state.pomodoroPaused});
        case DECREMENT_POMODORO_TIMER:
            return merge(state, {pomodoroTimeRemaining: state.pomodoroTimeRemaining - 1});
        case RESET_POMODORO:
            return merge(state, initialState);
        default:
            return state;
    }
};

export default combineReducers({
    pomodoro: pomodoroReducer,
});