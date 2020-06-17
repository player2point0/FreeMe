import { createStore } from 'redux';
import rootReducer from './Reducers';

const store = createStore(rootReducer);

console.log(store.getState());


export default store