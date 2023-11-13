import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/cartReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
