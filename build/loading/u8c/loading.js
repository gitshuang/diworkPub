'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _style = {
  'loading_modal': 'loading_modal__style___2u9Eb',
  'antRotate': 'antRotate__style___aI3o5',
  'antSpinMove': 'antSpinMove__style___2zWlU'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loading(props) {
  var text = props.text;

  return _react2["default"].createElement(
    'div',
    { className: _style.loading_modal },
    _react2["default"].createElement(
      'div',
      { className: 'ant-spin ant-spin-lg ant-spin-spinning ant-spin-show-text portal-spin' },
      _react2["default"].createElement(
        'span',
        { className: 'ant-spin-dot' },
        _react2["default"].createElement('i', null),
        _react2["default"].createElement('i', null),
        _react2["default"].createElement('i', null),
        _react2["default"].createElement('i', null)
      ),
      _react2["default"].createElement(
        'div',
        { className: 'ant-spin-text' },
        text || '加载中...'
      )
    )
  );
}

exports["default"] = Loading;
module.exports = exports['default'];