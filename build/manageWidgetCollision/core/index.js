'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _thunk = require('./thunk');

var _thunk2 = _interopRequireDefault(_thunk);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxLogger = require('redux-logger');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = void 0;

if (process.env.NODE_ENV === 'production') {
  middleware = (0, _redux.applyMiddleware)(_thunk2["default"], _reduxPromise2["default"]);
} else {
  // middleware = applyMiddleware(thunk, promise, );
  middleware = (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)(), _thunk2["default"], _reduxPromise2["default"]);
}

// const preloadedState = {};

var store = (0, _redux.createStore)(_reducer2["default"], middleware);

exports["default"] = store;
module.exports = exports['default'];