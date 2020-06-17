import {combineReducers} from 'redux'
import {START_POMODORO, TOGGLE_PAUSE_POMODORO, DECREMENT_POMODORO_TIMER} from './Actions'

import {POMODORO_START_TIME} from "../components/Pomodoro";

const merge = (prev, next) => Object.assign({}, prev, next);

export const defaultState = {
    pomodoroStarted: false,
    pomodoroPaused: false,
    pomodoroTimeRemaining: POMODORO_START_TIME,
    test: 'test',
};

const pomodoroReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_POMODORO:
            return merge(state, {pomodoroStarted: true});
        case TOGGLE_PAUSE_POMODORO:
            return merge(state, {pomodoroPaused: !state.pomodoroPaused});
        case DECREMENT_POMODORO_TIMER:
            return merge(state, {pomodoroTimeRemaining: state.pomodoroTimeRemaining - 1});
        default:
            return state;
    }
};

const reducer = combineReducers({
    pomodoro: pomodoroReducer,
});

export default reducer