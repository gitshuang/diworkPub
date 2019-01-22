'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MouseBackend = require('./MouseBackend');

var _MouseBackend2 = _interopRequireDefault(_MouseBackend);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import MouseBackEnd from 'react-dnd-mouse-backend'


var createMouseBackend = function createMouseBackend(manager) {
  return new _MouseBackend2["default"](manager);
};

var judgeIfSupH5 = function judgeIfSupH5() {
  if (window.hasOwnProperty('applicationCache') && window.hasOwnProperty('ondrag')) {
    return true;
  } else {
    return false;
  }
};

var judgedBackend = judgeIfSupH5() ? _reactDndHtml5Backend2["default"] : createMouseBackend;

exports["default"] = judgedBackend;
module.exports = exports['default'];