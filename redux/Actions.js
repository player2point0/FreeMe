export const SET_GOAL = 'SET_GOAL';
export const RESET_GOAL = 'RESET_GOAL';
export const START_WORK = 'START_WORK';
export const RESET_WORK = 'RESET_WORK';

export function setGoal(text){
    return {type: SET_GOAL, text}
}