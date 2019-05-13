import { createStore, applyMiddleware } from 'redux';
 import thunk from './thunk';
 import promise from 'redux-promise';
 import { createLogger } from 'redux-logger';
import reducer from './reducer';

// let middleware;

// if (process.env.NODE_ENV === 'production') {
//   middleware = applyMiddleware(thunk, promise);
// } else {
//   // middleware = applyMiddleware(thunk, promise, );
//   middleware = applyMiddleware(createLogger(), thunk, promise);
// }

// const preloadedState = {};

const store = createStore(
  reducer,
  // middleware,
);

export default store;
