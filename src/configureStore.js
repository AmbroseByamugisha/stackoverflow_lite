import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { getProfileFetch } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(getProfileFetch());
export default store