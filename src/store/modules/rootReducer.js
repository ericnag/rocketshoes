import { combineReducers } from 'redux';

import cart from './cart/reducer';
// import user from './user/reducer';    exemplo

export default combineReducers({
    cart,
    // user
});
