import { createStore, applyMiddleware, compose } from 'redux';
/*    con estas funciones ^^^^^^^^  y    ^^^^^^ es para aplicar el middleware en el compose  */

import rootReducer from './reducer';

import thunkMiddleware from 'redux-thunk';
/* para poder hacer peticiones async */

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* para que pueda usar redux dev tools 
Who's goona be the composer? Well, if you have REDUX DEV TOOLS (has it's own composer), use it, else, use compose from redux.
Then apply middleware*/

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

/* 
https://github.com/reduxjs/redux-thunk
https://redux.js.org/introduction/getting-started
*/