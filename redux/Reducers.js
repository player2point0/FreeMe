import {SET_GOAL, RESET_GOAL, START_WORK, RESET_WORK} from './Actions'

const merge = (prev, next) => Object.assign({}, prev, next);

export const initialState = {
    goal: '',
    startedWork: false,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOAL:
            return merge(state, {goal: action.text});
        case RESET_GOAL:
            return merge(state, {goal: ''});
        case START_WORK:
            return merge(state, {startedWork: true});
        case RESET_WORK:
            return merge(state, {startedWork: false});
        default:
            return state;
    }
};

export default Reducer